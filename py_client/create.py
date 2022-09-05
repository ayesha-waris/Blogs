import requests


# auth_endpoint = "http://localhost:8000/account/login/"
# # username = input("What is your username?\n")
# # password = getpass("What is your password?\n")
# auth_response = requests.post(auth_endpoint, json={'username': "ayeshawariss", 'password': "Thrones@1" })  # sent as data
# # print(auth_response.json())
# # print(auth_response.status_code)
# # print(auth_response.json()['token']['access'])


# if auth_response.status_code == 200:
token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYyNjcwNjQzLCJpYXQiOjE2NjIyMzg2NDMsImp0aSI6IjhmODM3NDY2N2QwZTRkNmZiZmI3YmVlYzQ0ODE5YThmIiwidXNlcl9pZCI6M30.-IbUwkgzQs9OYWcIhXO0V_-mm7SRoqVj1c9UwFp96FY'
headers = {
"Authorization": f'Bearer {token}'
}
endpoint = 'http://localhost:8000/api/create-blog/'

data = {
    'author':"ayeshawariss",
    'title': "gghh",
    'content': "M1cssd",
}
get_response = requests.post(endpoint, json=data, headers=headers)  # sent as data

print(get_response.json())
