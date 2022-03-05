import requests
import time
from datetime import date, datetime
from bs4 import BeautifulSoup
import urllib.request
import json


def save_json_file(data):
    out_file = open("output.json", "w")
    json.dump(data, out_file, indent=6)
    out_file.close()

def filter_rows(rows, text):
    filtered = filter(lambda row: text in row.text.strip(), rows)

    if(len(list(filtered)) == 0):
        return []

    return list(filtered)


def filter_text(text):
    text_array = text[0].text.strip().split('\n')
    filtered_array = list(filter(
        lambda string: len(string) != 0, text_array))

    return filtered_array[1]

def get_wiki_table(url, table_classname):
    html_text = requests.get(url).text
    soup = BeautifulSoup(html_text, "html.parser")
    
    return soup.find_all("table", class_=table_classname)

def scrape_characters_page(source_url, soup):
    characters = soup.find_all("a", class_="category-page__member-link")
    urls = []
    file = open('final.json')
    character_objects = json.load(file)
    file.close()

    for character in characters:
        new_url = source_url+ character["href"]
        urls.append(new_url)

    for url in urls:
        info_table = get_wiki_table(url, "infobox")

        if info_table != None:
            rows = info_table.find_all("tr")
            character_object = {}
            if rows != None and len(rows) > 2:
                name = rows[2].text.strip()
                gender = filter_rows(rows, 'Gender')
                hair = filter_rows(rows, 'Hair')
                occupation = filter_rows(rows, 'Occupation')
                relatives = filter_rows(rows, 'Relatives')
                age = filter_rows(rows, 'Age')
                first_episode = filter_rows(rows, 'First')
                voiced_by = filter_rows(rows, 'Voiced')
                character_object["url"] = url
                character_object["name"] = name
                character_object["image"] = "https://bobsburgers-api.herokuapp.com/images/characters/"

                if len(relatives) > 0:
                    relatives_list = relatives[0].text.strip().split('\n')
                    filtered = []
                    for relative in relatives_list:
                        if ('(see ' not in relative) and 'Relative' not in relative and len(relative) > 0:
                            filtered.append(relative)
                    character_object["relatives"] = filtered

                if len(hair) > 0:
                    character_object["hair"] = filter_text(hair)
                if len(gender) > 0:
                    character_object["gender"] = filter_text(gender)
                if len(occupation) > 0:
                    character_object["occupation"] = filter_text(occupation)
                if len(age) > 0:
                    character_object["age"] = filter_text(age)
                if len(age) > 0:
                    character_object["firstEpisode"] = filter_text(
                        first_episode)
                if len(voiced_by) > 0:
                    character_object["voicedBy"] = filter_text(voiced_by)

            character_objects.append(character_object)
        time.sleep(0.5)

    save_json_file(character_objects)


def scrape_all_character_pages(seed_url, page_number=0):
    urls = ["", "?from=Duncan", "?from=Marci", "?from=Skip+Marooch"]

    if(page_number == 4):
        return True

    try:
        url = seed_url + urls[page_number]
        html_text = requests.get(url).text
        soup = BeautifulSoup(html_text, "html.parser")

        if soup.find("a", class_="category-page__member-link") != None:
            scrape_characters_page("https://bobs-burgers.fandom.com", soup)

            time.sleep(3)
            page_number += 1
            return scrape_all_character_pages(seed_url, page_number)
        else:
            return False
    except Exception as e:
        return e

# works for storefronts, episodes, and pest control trucks
def running_gags(url):
    wiki_tables = get_wiki_table(url, "wikitable")

    if(wiki_tables == None): return [] 

    running_gags = []
    id = 0
    table_index = 0
    for wiki_table in wiki_tables:
        # skipping table 8 for 'brunchsquatch' episode
        if table_index != 8 and table_index != 0:
            rows = wiki_table.find_all("tr")
            if rows != None and len(rows) > 0:

                for index in range(1, len(rows)):
                    running_gag = {}
                    a_tags = rows[index].find_all("a")
                    name = rows[index].find_all("td")[1].text.strip()

                    if (len(name) != 0):
                        running_gag["name"] = name
                    running_gag["episode"] = a_tags[0].text.strip()
                    running_gag["image"] = a_tags[1]["href"]

                    if table_index > 8:
                        running_gag["season"] = table_index - 1
                    else:
                        running_gag["season"] = table_index
                    running_gag["id"] = id
                    running_gag["url"] = "http://bobs-burgers-api/stores/" + \
                        str(id)
                    running_gags.append(running_gag)
                    id += 1
        table_index += 1

    save_json_file(running_gags)

def scrape_end_credits(url):
    html_text = requests.get(url).text
    soup = BeautifulSoup(html_text, "html.parser")
    wiki_tables = soup.find_all("table", class_="wikitable")
    end_credits = []
    id = 14
    if wiki_tables != None:
        table_index = 0
        for wiki_table in wiki_tables:
            rows = wiki_table.find_all("tr")
            if rows != None and len(rows) > 0:
                for index in range(1, len(rows)):
                    end_credit = {}
                    a_tags = rows[index].find_all("a")
                    if(len(a_tags) > 0):
                        end_credit["id"] = id
                        end_credit["image"] = a_tags[1]["href"]
                        end_credit["season"] = table_index + 2
                        end_credit["episode"] = "http://bobs-burgers-api/episodes/" + \
                            str(id)
                        end_credit["url"] = "http://bobs-burgers-api/stores/" + \
                            str(id)
                        end_credits.append(end_credit)
                        id += 1
            table_index += 1

        save_json_file(end_credits)



def scrape_episodes(url):
    html_text = requests.get(url).text
    soup = BeautifulSoup(html_text, "html.parser")
    print("Fetched: " + url)
    wiki_tables = soup.find_all(
        "table", class_="wikitable")
    episodes = []

    id = 1
    if wiki_tables != None:
        table_index = 0
        for wiki_table in wiki_tables:
            rows = wiki_table.find_all("tr")
            if rows != None and len(rows) > 0:

                for index in range(1, len(rows)):
                    episode = {}
                    link = rows[index].find("a")["href"]

                    cells = rows[index].find_all("td")
                    season_episode = cells[2].text.strip().split(",")
                    season_number = season_episode[0].split(" ")[1]
                    episode_number = season_episode[1].strip().split(" ")[
                        1]
                    formatted_episode = episode_number if len(
                        episode_number) > 2 else int(episode_number)

                    total_viewers = scrape_total_Viewers(link, False)
                    name = cells[0].text.strip()

                    episode["id"] = id
                    if (len(name) != 0):
                        episode["name"] = name

                    episode["productionCode"] = cells[1].text.strip()
                    episode["airDate"] = cells[len(cells) - 1].text.strip()
                    episode["season"] = int(season_number)
                    episode["episode"] = formatted_episode

                    if (len(total_viewers) > 0):
                        episode["totalViewers"] = total_viewers
                    episode["url"] = "http://bobs-burgers-api/episodes/" + \
                        str(id)
                    episodes.append(episode)
                    id += 1
            table_index += 1

        save_json_file(episode)


def scrape_total_Viewers(url, retried):
    complete_url = "https://bobs-burgers.fandom.com" + url
    episode_html_text = requests.get(complete_url).text
    soup = BeautifulSoup(episode_html_text, "html.parser")
    info_box = soup.find("aside", class_="portable-infobox")

    if info_box != None:
        viewers = info_box.find(
            "div", {"data-source": "viewers"})
        return viewers.text.strip()
    elif(retried == False):
        return scrape_total_Viewers(url + "_(Episode)", True)
    else:
        return ""

running_gags("https://bobs-burgers.fandom.com/wiki/Store_Next_Door")
'''
EPISODES_URL = "https://bobs-burgers.fandom.com/wiki/List_of_episodes_by_production_order"
CHARACTERS_URL = "https://bobs-burgers.fandom.com/wiki/Category:Characters"
END_CREDITS = "https://bobs-burgers.fandom.com/wiki/End_Credits_Sequence"
STORE_NEXT_DOOR = "https://bobs-burgers.fandom.com/wiki/Store_Next_Door
if __name__ == "__main__":
    seed_url = EPISODES_URL
    print("Web scraping has begun")
    result = scrape_episodes("https://bobs-burgers.fandom.com/wiki/List_of_episodes_by_production_order")

    if result == True:
        print("Web scraping is now complete!")
    else:
        print(f"Error - {result}")
'''