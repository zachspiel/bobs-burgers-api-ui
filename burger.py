import json


burger_file = open("burgerOfDay.json", "r")
episodes_file = open("episodes.json", "r")

burgers = json.load(burger_file)
episodes = json.load(episodes_file)

result = []

for burger in burgers:
    for episode in episodes:
        if burger["episode"] in episode["name"]:
            current_id = len(result) + 1
            formatted = {
                "id": current_id,
                "burgers": burger["burgers"],
                "season": burger["season"],
                "episode": episode["url"],
                "episodeName": episode["name"],
                "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/" + str(current_id)
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
