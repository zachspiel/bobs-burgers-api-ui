import requests
import time
import csv
from datetime import date, datetime
from bs4 import BeautifulSoup
import json
import time


def filter_rows(rows, text):
    filtered = []

    for row in rows:
        if(text in row.text.strip()):
            filtered.append(row)
    return filtered


def filter_text(text):
    text_array = text[0].text.strip().split('\n')
    # print(text_array)
    filtered_array = list(filter(
        lambda string: len(string) != 0, text_array))
    filtered_text = filtered_array[1]
    additional_information_index = filtered_text.find(")")

    if(additional_information_index != -1):
        filtered_text = filtered_text.replace(")", "), ", 1)

    return filtered_text


def scrape_characters_page(source_url, soup):
    characters = soup.find_all("a", class_="category-page__member-link")
    urls = []
    file = open('final.json')
    character_objects = json.load(file)
    file.close()

    for each_book in characters:
        new_url = source_url+each_book["href"]
        urls.append(new_url)

    for url in urls:
        html_text = requests.get(url).text
        soup = BeautifulSoup(html_text, "html.parser")
        # print("Fetched: " + url)
        info_table = soup.find("table", class_="infobox")

        if info_table != None:
            rows = info_table.find_all("tr")
            character_object = {}
            if rows != None and len(rows) > 2:
                name = rows[2].text.strip()
                first_episode = filter_rows(rows, 'First')
                voiced_by = filter_rows(rows, 'Voiced')
                character_object["name"] = name
                if len(first_episode) > 0:
                    character_object["firstEpisode"] = filter_text(
                        first_episode)
                if len(voiced_by) > 0:
                    character_object["voicedBy"] = filter_text(voiced_by)

            character_objects.append(character_object)
            # print("Retrieved: " + json.dumps(character_object))

        time.sleep(0.5)

    out_file = open("final.json", "w")

    json.dump(character_objects, out_file, indent=6)

    out_file.close()


def scrape_all_character_pages(seed_url, page_number=0):
    urls = ["", "?from=Duncan", "?from=Marci", "?from=Skip+Marooch"]

    if(page_number == 4):
        return True

    try:
        url = seed_url + urls[page_number]

        html_text = requests.get(url).text
        soup = BeautifulSoup(html_text, "html.parser")
        # print(f"Now Scraping - {seed_url}")

        if soup.find("a", class_="category-page__member-link") != None:
            scrape_characters_page("https://bobs-burgers.fandom.com", soup)

            time.sleep(3)
            page_number += 1
            return scrape_all_character_pages(seed_url, page_number)
        else:
            return False
    except Exception as e:
        return e


def time_convert(sec):
    mins = sec // 60
    sec = sec % 60
    hours = mins // 60
    mins = mins % 60
    print("Time Lapsed = {0}:{1}:{2}".format(int(hours), int(mins), sec))


if __name__ == "__main__":
    seed_url = "https://bobs-burgers.fandom.com/wiki/Category:Characters"
    print("Web scraping has begun")
    start_time = time.time()
    result = scrape_all_character_pages(seed_url)
    print(result)
    if result == True:
        print("Web scraping is now complete!")
        end_time = time.time()
        time_lapsed = end_time - start_time
        time_convert(time_lapsed)
    else:
        print(f"Error - {result}")
