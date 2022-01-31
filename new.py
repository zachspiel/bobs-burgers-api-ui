import json

f = open('characters.json')
data = json.load(f)

f2 = open('newData.json')
new_data = json.load(f2)

complete_characters = []


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
for character in data:
    updated_character = {}
    updated_character["id"] = character["id"]
    updated_character["name"] = character["name"]
    updated_character["image"] = character["image"]

    if "gender" in character:
        updated_character["gender"] = character["gender"]
    if "age" in character:
        updated_character["age"] = character["age"]
    if "hairColor" in character:
        updated_character["hairColor"] = character["hairColor"]
    if "occupation" in character:
        updated_character["occupation"] = character["occupation"]
    if "relatives" in character:
        updated_character["relatives"] = character["relatives"]
    if "firstEpisode" in character:
        updated_character["firstEpisode"] = character["firstEpisode"]
    if "voicedBy" in character:
        updated_character["voicedBy"] = character["voicedBy"]

    updated_character["url"] = character["url"]
    complete_characters.append(updated_character)
'''
for character in data:
    updated_character = character
    updated_character["image"] = "https://bobsburgers-api.herokuapp.com/images/characters/" + \
        str(character["id"]) + ".jpg"
    complete_characters.append(updated_character)

out_file = open("final.json", "w")

json.dump(complete_characters, out_file, indent=6)

out_file.close()
