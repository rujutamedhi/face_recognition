from flask import Flask, request,jsonify
import face_recognition as fr
from pymongo import MongoClient
import numpy as np
from datetime import datetime
import pytz
def test_connection():
    CONNECTION_URL = "mongodb+srv://rujutamedhi:rujutamedhi04@cluster0.oligl.mongodb.net/encodings?retryWrites=true&w=majority&appName=Cluster0"
    try:
        client = MongoClient(CONNECTION_URL)
        # Attempt to fetch database names to check connection
        db_names = client.list_database_names()
        print("Connected to MongoDB. Databases available:", db_names)
        return True
    except Exception as e:
        print("Connection failed:", e)
        return False
def get_database():
    print("face3")
    CONNECTION_URL = "mongodb+srv://rujutamedhi:rujutamedhi04@cluster0.oligl.mongodb.net/encodings?retryWrites=true&w=majority&appName=Cluster0"
    client = MongoClient(CONNECTION_URL)
    return client['AttendEase']
    
def getEncodings():
    print("face2")
    dbname=get_database()
    collection_name = dbname["encodings"]
    items=collection_name.find({})
    for i in items:
        i.pop("_id")
        known_images=list(i.keys())
        values=list(i.values())
        encodings=[]
        for v in values:
            encodings.append(np.array(v))
        return known_images,encodings

def update_face(imgName,addImg):
    addImage=fr.load_image_file(addImg)
    try:
        image_encoding=list(fr.face_encodings(addImage)[0])
    except IndexError as e:
        return False
    try:
        pair={imgName:image_encoding}
        dbname=get_database()
        collection_name = dbname["encodings"]
        items=collection_name.insert_one(pair)
        print(items)
        return True
    except:
        return False

def compare_faces(baseImg):
    print("face1")
    known_images,encodings=getEncodings()
    test = fr.load_image_file(baseImg)
    try:
        test_encoding = fr.face_encodings(test)[0]
    except IndexError as e:
        return False
    results = fr.compare_faces(encodings, test_encoding)    
    print(results)
    if(True in results):
        i=results.index(True)
        return known_images[i].split(".")[0]
    return False

def update_attendance(id,status):
    print("face4")
    IST = pytz.timezone('Asia/Kolkata')
    now = datetime.now(IST)
    momentDate=now.strftime("%d/%m/%Y")
    momentTime=now.strftime("%H:%M:%S")
    db= get_database()
    collection_name=db[momentDate]
    data={"id":id,"status":status,"date":momentDate,"time":momentTime}
    try:
        ret = collection_name.insert_one(data)
        return True
    except Exception as e:
        return False

app = Flask(__name__)
@app.route('/face_match', methods=['POST'])
def face_match():
    print("face0")
    if 'file1' not in request.files:
        return jsonify({"error": "No file part"}), 400
    print("no face")
    file1 = request.files['file1']
    if file1.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Save the file if needed or process it
    response = compare_faces(file1)
    if response:
        id = response
        status = file1.filename
        update_attendance(id, status)
    return jsonify({"status": response})


@app.route('/add_face',methods=['POST'])
def add_face():
    if request.method == 'POST':
       if ('file1' in request.files):  
           file1=request.files.get('file1')
           print("/add_face called")
           imgName=file1.filename.split(".")[0]
           response = update_face(imgName,file1)
           return jsonify({"status":response})

@app.route('/',methods=['GET'])
def home():
    return 'AttendEase APP API'
if __name__ == "__main__":
    test_connection()