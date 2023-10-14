from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime

uri = "mongodb+srv://gators:G8t0rs@cluster0.tt5rvec.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

db = client.mydatabase

collection = db.mycollection

documents = [
    {"name": "Alice", "access_time": "10/13/2023"},
    {"name": "Bob", "access_time": "10/17/2023"},
]

collection.insert_many(documents)