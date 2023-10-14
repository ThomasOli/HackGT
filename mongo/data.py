from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://gators:G8t0rs@cluster0.tt5rvec.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

db = client.mydatabase

collection = db.mycollection

documents = [
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 35},
]

collection.insert_many(documents)