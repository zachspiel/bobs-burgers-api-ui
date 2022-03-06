import urllib.request
import json
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

file = open("final.json")
data = json.load(file)


updated_data = []

for character in data:
    urllib.request.urlretrieve(character["image"], str(character["id"]) + ".jpg")

    copy = character
    copy["image"] = "https://bobsburgers-api.herokuapp.com/images/storeNextDoor/" + \
        str(character["id"]) + ".jpg"
    updated_data.append(copy)

with open('final2.json', 'w') as f:
    json.dump(updated_data, f)
