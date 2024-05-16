from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:8100"}})


@app.route('/login', methods=['GET', 'POST', 'PUT', 'DELETE'])
def login():
    return jsonify({'message': 'Login exitoso'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)