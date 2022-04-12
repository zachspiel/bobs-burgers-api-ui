
import json


characters_file = open("data2.json", "r")
characters = json.load(characters_file)

result = []
print(len(characters))
prev = characters[len(characters) - 1]

for character in characters:
    copy = character
    if "relatives" in copy:
        relatives = copy["relatives"]
        index = 0
        for relative in relatives:
            if "wikiUrl" in relative:
                for j in characters:
                    if j["wikiUrl"] == relative["wikiUrl"]:
                        relatives[index]["url"] = j["url"]
            index += 1
        copy["relatives"] = relatives
    result.append(copy)


out_file = open("characters.json", "w")
json.dump(result, out_file)
out_file.close()
'''
for character in characters:
    copy = character

    if "relatives" in copy:
        index = 0
        for relative in copy["relatives"]:
            for character2 in characters:
                if relative["name"] == "Big Bob":
                    copy["relatives"][index]["url"] = "https://bobsburgers-api.herokuapp.com/characters/45"
                elif relative["name"] == "Tina Belcher":
                    copy["relatives"][index]["url"] = "https://bobsburgers-api.herokuapp.com/characters/473"
                elif character2["name"] == relative["name"]:
                    copy["relatives"][index]["url"] = character2["url"]
            index += 1

    result.append(copy)

out_file = open("updatedCharacters.json", "w")
json.dump(result, out_file)
out_file.close()
'''
