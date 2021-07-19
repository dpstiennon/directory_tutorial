from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def hello_world():
    raw_data = [
        {
            "name": "David",
            "address": "3100 N Chestnut",
            "email": "dstiennon@lenderclose.com"
        },
    ]
    return jsonify(raw_data)
