from typing import List
from bs4 import BeautifulSoup
import requests
import re


def remove_empty_lines(text):
    text_array = text[0].text.strip().split("\n")
    filtered_array = list(filter(
        lambda string: len(string) != 0, text_array))

    result = filtered_array[1].split(")")
    return "), ".join(result)


def filter_rows_by_string(rows, text):
    filtered = filter(
        lambda row: text in row.text, rows)

    return list(filtered)


def get_wiki_table(url, table_classname):
    html_text = requests.get(url).text
    soup = BeautifulSoup(html_text, "html.parser")

    return soup.find("table", class_=table_classname)


def seperate_by_uppercase_letters(text: str) -> List[str]:
    return re.sub(r'([A-Z])', r',\1', re.sub(r'[,:=/]', '', text)).split(",")
