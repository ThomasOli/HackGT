from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import json

uri = "mongodb+srv://gators:G8t0rs@cluster0.tt5rvec.mongodb.net/?retryWrites=true&w=majority"

# returns dictionary with mongo data
def GetMongoData():
    res = []
    # Create a new client and connect to the server
    client = MongoClient(uri, server_api=ServerApi('1'))

    db = client.mydatabase

    # Init new collection
    collection = db.mycollection

    retrieved_data = collection.find()
    
    for document in retrieved_data:
        res.append(document)
        
    return res

ans = GetMongoData()

print(ans)