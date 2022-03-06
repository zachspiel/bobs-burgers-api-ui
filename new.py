import json
import urllib.request
import ssl
import requests

ssl._create_default_https_context = ssl._create_unverified_context

f = open('./data/episodes.json')
episodes = json.load(f)

f2 = open('output.json')
stores_next_door = json.load(f2)

complete_characters = []
'''
def find_character(original_character):
    for character in new_data:
        print(character)
        if character["name"] == original_character["name"]:
            updated_store = original_character

            if "firstEpisode" in character:
                updated_store["firstEpisode"] = character["firstEpisode"]

            if "voicedBy" in character:
                updated_store["voicedBy"] = character["voicedBy"]

            complete_characters.append(updated_store)

            return


'''
index = 1
for store in stores_next_door:
    # episode = requests.get("https://bobsburgers-api.herokuapp.com/episodes/" + str(index))
    #= print(episode.json())
    # episode_number = episode.json()["episode"]
    updated_store = {}
    updated_store["id"] = index 

    if "name" in store:
        updated_store["name"] = store["name"]
    
    filtered = filter(lambda episode: store["episode"] in episode["name"], episodes)
    found = list(filtered)  
    print(found)
    if len(found) == 0:
        print(store["episode"])
        break

    found_episode = found[0]
        
    updated_store["image"] = store["image"]
    updated_store["season"] = found_episode["season"]
    updated_store["episode"] = found_episode["episode"]
    updated_store["episodeUrl"] = found_episode["url"]
    updated_store["url"] = "https://bobsburgers-api.herokuapp.com/storeNextDoor/" + str(index)
   
    # urllib.request.urlretrieve(character["image"], str(index) + ".jpg")
    index += 1
    complete_characters.append(updated_store)
    
out_file = open("final.json", "w")

json.dump(complete_characters, out_file, indent=6)

out_file.close()

'''
for character in data:
    updated_store = character
    updated_store["image"] = "https://bobsburgers-api.herokuapp.com/images/characters/" + \
        str(character["id"]) + ".jpg"
    complete_characters.append(updated_store)

out_file = open("final.json", "w")

json.dump(complete_characters, out_file, indent=6)

out_file.close()
'''
