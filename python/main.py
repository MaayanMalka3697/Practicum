from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# התחברות ל-MongoDB
client = MongoClient('mongodb+srv://maayanmalka3697:maayanmalka3697@maayan.yptlels.mongodb.net/')
db = client['Maayan']  # החלף בשם בסיס הנתונים שלך
collection = db['sample_mflix.comments']  # החלף בשם האוסף שלך

@app.route('/api/data', methods=['GET'])
def get_data():
    data = list(collection.find({}, {'_id': 0}))
    return jsonify(data)

@app.route('/api/data', methods=['POST'])
def add_data():
    data = request.json
    collection.insert_one(data)
    return jsonify({'msg': 'Data inserted successfully!'}), 201

@app.route('/api/data/<string:id>', methods=['PUT'])
def update_data(id):
    data = request.json
    collection.update_one({'_id': id}, {'$set': data})
    return jsonify({'msg': 'Data updated successfully!'})

@app.route('/api/data/<string:id>', methods=['DELETE'])
def delete_data(id):
    collection.delete_one({'_id': id})
    return jsonify({'msg': 'Data deleted successfully!'})

if __name__ == '__main__':
    app.run(debug=True)
