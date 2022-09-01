import requests
from getpass import getpass

auth_endpoint = "http://localhost:8000/account/login/"
# username = input("What is your username?\n")
# password = getpass("What is your password?\n")
auth_response = requests.post(auth_endpoint, json={'username': "ayeshawariss", 'password': "Thrones@1" })  # sent as data
# print(auth_response.json())
# print(auth_response.status_code)
# print(auth_response.json()['token']['access'])


if auth_response.status_code == 200:
  token = auth_response.json()['token']['access']
  headers = {
    "Authorization": f'Bearer {token}'
  }



endpoint = "http://localhost:8000/api/userblogs/"

get_response = requests.get(endpoint, headers=headers)  # sent as data
# data = get_response.json()
# next_url = data['next']
print(get_response.json())

# {'count': 0, 'next': None, 'previous': None, 'results': []}

# {'count': 1, 'next': None, 'previous': None, 'results': [{'pk': 11, 'title': 'macbook', 'content': 'M1cssd'}]}

# while next_url is not None:
#   get_response = requests.get(endpoint, headers=headers) 
