import requests

response = requests.get("https://raw.githubusercontent.com/tabatkins/wordle-list/main/words")

print(response.content)