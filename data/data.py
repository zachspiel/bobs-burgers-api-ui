import json
import requests

burger_file = open("characters.json", "r")
burgers = json.load(burger_file)

result = []

for character in burgers:

    formatted = {
        "id": character["id"],
        "name": character["name"],
        "image": character["image"],
    }

    if "gender" in character:
        formatted["gender"] = character["gender"]
    if "hairColor" in character:
        formatted["hairColor"] = character["hairColor"]
    if "occupation" in character:
        formatted["occupation"] = character["occupation"]

    relatives = []
    relative_urls = []
    if "relatives" in character:
        for relative in character["relatives"]:
            if "https" not in relative:
                relatives.append({"name": relative})
            else:
                relative_urls.append(relative)
                data = requests.get(relative).json()
                name = ""
                if "name" in data:
                    name = data["name"]
                relatives.append({"name": name, "url": relative})

    formatted["relatives"] = relatives
    formatted["relativeUrls"] = relative_urls
    if "firstEpisode" in character:
        formatted["firstEpisode"] = character["firstEpisode"]
    if "voicedBy" in character:
        formatted["voicedBy"] = character["voicedBy"]

    formatted["url"] = character["url"]
    result.append(formatted)


with open('json_data_new_new.json', 'w') as outfile:
    json.dump(result, outfile)

'''
current_season = ""
current_episode = ""
current_burgers = []
result = []
episode_data = {}

for line in file:
    if "===" in line:
        if(len(current_burgers) > 0):
            result.append({
                "season": current_season,
                "burgers": current_burgers,
                "episode": current_episode
            })
            current_burgers = []
        current_episode = line
    elif "==" in line and "===" not in line:
        current_season = line
    elif len(line) > 0:
        current_burgers.append(line)

with open('json_data_new.json', 'w') as outfile:
    json.dump(result, outfile)
'''
