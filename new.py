import json
import urllib.request
import ssl
import requests

ssl._create_default_https_context = ssl._create_unverified_context

f = open('output.json')
data = json.load(f)

f2 = open('newData.json')
new_data = json.load(f2)

complete_characters = []
'''
def find_character(original_character):
    for character in new_data:
        print(character)
        if character["name"] == original_character["name"]:
            updated_character = original_character

            if "firstEpisode" in character:
                updated_character["firstEpisode"] = character["firstEpisode"]

            if "voicedBy" in character:
                updated_character["voicedBy"] = character["voicedBy"]

            complete_characters.append(updated_character)

            return


'''
index = 1
for character in data:
    # episode = requests.get("https://bobsburgers-api.herokuapp.com/episodes/" + str(index))
    #= print(episode.json())
    # episode_number = episode.json()["episode"]
    updated_character = {}
    updated_character["id"] = index 
    updated_character["image"] = character["image"]
    updated_character["season"] = character["season"]
    updated_character["episode"] = character["episode"]
    updated_character["episodeUrl"] = "https://bobsburgers-api.herokuapp.com/episodes/" + str(index)
    updated_character["url"] = "https://bobsburgers-api.herokuapp.com/endCreditsSequence/" + str(index)
   
    # urllib.request.urlretrieve(character["image"], str(index) + ".jpg")
    index += 1
    complete_characters.append(updated_character)
    
out_file = open("output2.json", "w")

json.dump(complete_characters, out_file, indent=6)

out_file.close()
'''
for character in data:
    updated_character = character
    updated_character["image"] = "https://bobsburgers-api.herokuapp.com/images/characters/" + \
        str(character["id"]) + ".jpg"
    complete_characters.append(updated_character)

out_file = open("final.json", "w")

json.dump(complete_characters, out_file, indent=6)

out_file.close()
'''
