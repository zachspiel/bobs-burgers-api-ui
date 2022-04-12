
import json
from typing import Dict, List
from urllib.error import HTTPError
import requests
from bs4 import BeautifulSoup
from util import filter_rows_by_string, remove_empty_lines, seperate_by_uppercase_letters, get_wiki_table
import urllib.request
import ssl

ROOT_URL = "https://bobs-burgers.fandom.com"
SEED_URL = ROOT_URL + "/wiki/Category:Characters"
CHARACTER_PROPERTIES = [
    {
        "wikiLabel": "Age",
        "key": "age"
    },
    {
        "wikiLabel": "Gender",
        "key": "gender"
    },
    {
        "wikiLabel": "Hair",
        "key": "hair"
    },
    {
        "wikiLabel": "Relatives",
        "key": "relatives"
    },
    {
        "wikiLabel": "Occupation",
        "key": "occupation"
    },
    {
        "wikiLabel": "Gender",
        "key": "gender"
    },
    {
        "wikiLabel": "First",
        "key": "firstEpisode"
    },
    {
        "wikiLabel": "Voiced",
        "key": "voicedBy"
    }
]

characters = []


def scrape_character_wiki_page(rows, url):
    if(len(rows[1].find_all("img")) == 0):
        return None

    character = {}
    name = rows[2].text.strip()
    character_id = len(characters) + 1
    character_id_string = str(character_id)
    character["id"] = character_id
    character["name"] = name
    download_image(rows[1].find("img")["src"], character_id)
    character["image"] = "https://bobsburgers-api.herokuapp.com/images/characters/" + \
        character_id_string + ".jpg"

    for property in CHARACTER_PROPERTIES:
        filtered_rows = filter_rows_by_string(rows, property["wikiLabel"])
        key = property["key"]
        if key == "relatives" and len(filtered_rows) > 0:
            td = filtered_rows[0].find("td")
            if td != None:
                relatives = td.text.strip()
                relatives = relatives.replace(")", "),")
                relatives = relatives.replace(" U", ",U")
                relatives = seperate_unnamed_relatives(relatives)
                relatives = relatives.replace(",,", ",")
                relatives = relatives.replace("\n", "")
                relatives = relatives.replace(
                    "cousin, not Tina Belcher", "cousin (not Tina Belcher)")
                relatives_array = relatives.split(",")
                relatives_array = list(filter(lambda x: len(
                    x) > 0 and "(see" not in x, relatives_array))
                final_relatives = []
                for relative in relatives_array:
                    if not(is_relative_unnamed(relative)) and "(" not in relative:
                        continue

                    last_index = len(
                        relative) + 1 if is_relative_unnamed(relative) else relative.index("(")

                    name = relative[0:last_index-1]
                    relative_url = find_character_wiki_url(
                        td.find_all("a"), name)

                    new_relative = {"name": name}

                    if len(relative_url) > 0:
                        new_relative["wikiUrl"] = relative_url

                    if last_index < len(relative):
                        new_relative["relationship"] = extract_relationship(
                            relative)

                    final_relatives.append(new_relative)
                character[key] = final_relatives

        elif len(filtered_rows) > 0:
            character[key] = remove_empty_lines(filtered_rows)

    character["url"] = "https://bobsburgers-api.herokuapp.com/characters/" + \
        character_id_string
    character["wikiUrl"] = url

    return character


def is_relative_unnamed(relative):
    return "Unnamed" in relative or "unnamed" in relative


def seperate_unnamed_relatives(relatives):
    UNNAMED_RELATIVES = ["wife", "husband", "daughter", "mother", "aunt", "uncle", "grandparents", "son",
                         "father", "sister", "child", "brother", "44 year old brother", "grandmother", "grandfather", "parents"]
    result = relatives
    for unnamed_relative in UNNAMED_RELATIVES:
        result = result.replace(
            "Unnamed " + unnamed_relative, "Unnamed " + unnamed_relative + ",")

    return result


def extract_relationship(relative):
    start = relative.index('(')
    end = relative.index(')', start+1)

    return relative[start+1:end]


def find_character_wiki_url(urls, name):
    index = 0

    for url in urls:
        if name in url:
            return ROOT_URL + urls[index]["href"]
        index += 1

    return ""


def scrape_characters_page(urls):
    for url in urls:
        print(url)
        wiki_table = get_wiki_table(url, "infobox")
        if wiki_table == None:
            continue

        rows = wiki_table.find_all("tr")
        if rows != None and len(rows) > 2:
            character = scrape_character_wiki_page(rows, url)
            if character != None:
                characters.append(character)


def get_all_characters(page_number=0):
    urls = ["", "?from=Duncan", "?from=Marci", "?from=Skip+Marooch"]

    if(page_number == 4):
        return True

    try:
        url = SEED_URL + urls[page_number]
        html_text = requests.get(url).text
        soup = BeautifulSoup(html_text, "html.parser")

        if soup.find("a", class_="category-page__member-link") != None:
            character_urls = get_all_character_urls(soup)
            scrape_characters_page(character_urls)
            return get_all_characters(page_number + 1)
    except Exception as e:
        print(e)


def get_all_character_urls(soup):
    characters = soup.find_all("a", class_="category-page__member-link")

    return list(map(lambda character: ROOT_URL + character["href"], characters))


def download_image(url, id):
    ssl._create_default_https_context = ssl._create_unverified_context
    try:
        urllib.request.urlretrieve(url, "downloads/" + str(id) + ".jpg")
    except FileNotFoundError as err:
        print(err)
    except HTTPError as err:
        print(err)


get_all_characters()

print("Found: " + str(len(characters)) + " characters.")
out_file = open("data2.json", "w")
json.dump(characters, out_file, indent=6)
out_file.close()
'''
scrape_characters_page(
    ["https://bobs-burgers.fandom.com/wiki/Jocelyn"])
print(characters)
'''
