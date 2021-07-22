from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from backend.people_database import PeopleDatabase

app = Flask(__name__)
CORS(app)


def load_all_contacts():
    with open('backend/data.json', 'r') as file:
        raw_data = json.loads(file.read())
        return raw_data


def write_contacts(contacts):
    with open('backend/data.json', 'w') as file:
        file.write(json.dumps(contacts))
        return contacts


def generate_id(contacts):
    new_id = max(contact["id"] for contact in contacts) + 1
    return new_id

@app.route("/api/contacts", methods=['GET'])
def get_contacts():
    raw_data = PeopleDatabase().load()
    raw_data = [entry for entry in raw_data if entry['deleted'] == False]
    # raw_data = load_all_contacts()
    # not_deleted_contacts = []
    # for contact in raw_data:
    #     if not contact["deleted"]:
    #         not_deleted_contacts.append(contact)
    return jsonify(raw_data)


@app.route("/api/contacts/<int:contact_id>", methods=['GET'])
def one_contact(contact_id):
    raw_data = load_all_contacts()
    the_contact_we_want = next((contact for contact in raw_data if contact['id'] == contact_id), None)
    return jsonify(the_contact_we_want)

@app.route("/api/contacts/<int:contact_id>", methods=['DELETE'])
def delete_contact(contact_id):
    #Excercise for the reader
    pass

@app.route("/api/contacts", methods=['POST'])
def create_contacts():
    new_contact = json.loads(request.data)
    _PeopleDb = PeopleDatabase()
    _PeopleDb.save(new_contact)
    all_contacts = _PeopleDb.load()
    return jsonify(all_contacts)
