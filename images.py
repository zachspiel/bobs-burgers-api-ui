import requests
import urllib.request
import json

file = open("characters.json")

data = json.load(file)

# response = requests.get("https://bobsburgers-api.herokuapp.com/characters/")
# characters = response.json()

updated_data = []

for character in data:
    # urllib.request.urlretrieve(
    #    character["image"], "D:\\dev\\bobs-burgers-images\\" + str(character["id"]) + ".jpg")

    url_id = character["url"].split("/")[4]
    copy = character
    copy["image"] = "https://bobsburgers-api.herokuapp.com/images/characters/" + \
        str(character["id"]) + ".jpg"
    copy["url"] = "https://bobsburgers-api.herokuapp.com/characters/" + \
        str(character["id"])
    updated_data.append(copy)

with open('output.json', 'w') as f:
    json.dump(updated_data, f)
