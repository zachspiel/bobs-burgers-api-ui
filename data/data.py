import json


burger_file = open("burgerOfDay.json", "r")

burgers = json.load(burger_file)

result = []

for burger in burgers:

    episode_burgers = burger["burgers"]

    for episode_burger in episode_burgers:
        current_id = len(result) + 1
        formatted = {
            "id": current_id,
            "name": episode_burger,
            "price": burger["price"],
            "season": burger["season"],
            "episode": burger["episode"],
            "episodeUrl": burger["episodeUrl"],
            "url": burger["url"]
        }
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
