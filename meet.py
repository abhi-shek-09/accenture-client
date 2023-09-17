# import requests
# client_id = "FBGawoyIQUSa2rl4vfIwuA" 
# account_id = "aOaLe7L1S1uHRXbW23S3XA" 
# client_secret = "ZBItqCrkmKQ66cWgVF4WGUUN57rX732k" 

# auth_token_url = "https://zoom.us/oauth/token"
# api_base_url = "https://api.zoom.us/v2"

# def create_meeting(topic, duration, start_date, start_time):
#         data = {
#         "grant_type": "account_credentials",
#         "account_id": account_id,
#         "client_secret": client_secret
#         }
#         response = requests.post(auth_token_url, 
#                                  auth=(client_id, client_secret), 
#                                  data=data)
        
#         if response.status_code!=200:
#             print("Unable to get access token")
#         response_data = response.json()
#         access_token = response_data["access_token"]

#         headers = {
#             "Authorization": f"Bearer {access_token}",
#             "Content-Type": "application/json"
#         }
#         payload = {
#             "topic": topic,
#             "duration": duration,
#             'start_time': f'{start_date}T10:{start_time}',
#             "type": 2
#         }

#         resp = requests.post(f"{api_base_url}/users/me/meetings", 
#                              headers=headers, 
#                              json=payload)
        
#         if resp.status_code!=201:
#             print("Unable to generate meeting link")
#         response_data = resp.json()
        
#         content = {
#                     "meeting_url": response_data["join_url"], 
#                     "password": response_data["password"],
#                     "meetingTime": response_data["start_time"],
#                     "purpose": response_data["topic"],
#                     "duration": response_data["duration"],
#                     "message": "Success",
#                     "status":1
#         }
#         print(content)

# create_meeting(
#       "Test Zoom Meeting",
#       "60",
#       "2023-09-17",
#       "18:00",
#       )



##youll have to import this function into the react page
import requests

client_id = "FBGawoyIQUSa2rl4vfIwuA"
account_id = "aOaLe7L1S1uHRXbW23S3XA"
client_secret = "ZBItqCrkmKQ66cWgVF4WGUUN57rX732k"

auth_token_url = "https://zoom.us/oauth/token"
api_base_url = "https://api.zoom.us/v2"

def create_meeting(topic, duration, start_date, start_time, host_user_id, participants=[]):
    data = {
        "grant_type": "account_credentials",
        "account_id": account_id,
        "client_secret": client_secret
    }
    response = requests.post(auth_token_url,
                             auth=(client_id, client_secret),
                             data=data)

    if response.status_code != 200:
        print("Unable to get access token")
    response_data = response.json()
    access_token = response_data["access_token"]

    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    payload = {
        "topic": topic,
        "type": 2,
        "start_time": f"{start_date}T{start_time}:00Z",
        "duration": duration,
        "timezone": "Asia/Kolkata",  
        "settings": {
            "join_before_host": True,
            "mute_upon_entry": False,
        },
        "recurrence": {
            "type": 1  
        },
        "host_id": host_user_id,
        "participants": participants
    }

    resp = requests.post(f"{api_base_url}/users/me/meetings",
                         headers=headers,
                         json=payload)

    if resp.status_code != 201:
        print("Unable to generate meeting link", resp)
    else:
        response_data = resp.json()
        if "join_url" in response_data:
            content = {
                "meeting_url": response_data["join_url"],
                "password": response_data["password"],
                "meetingTime": response_data["start_time"],
                "purpose": response_data["topic"],
                "duration": response_data["duration"],
                "message": "Success",
                "status": 1
            }
            print(content)
        else:
            print("Missing 'join_url' in the API response.")

host_user_id = "275904"
participants = [{"Varun": "varun10sudhir@gmail.com"}]

create_meeting(
    "Test Zoom Meeting",
    "60",
    "2023-09-17",
    "19:00",
    host_user_id,
    participants
)
# call this 