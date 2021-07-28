from flask.views import MethodView
from flask import jsonify, request
import json

from backend.people_database import PeopleDatabase


class ContactsView(MethodView):

    def get(self, contact_id):
        if contact_id is None:
            raw_data = PeopleDatabase().load()
            raw_data = [entry for entry in raw_data if entry['deleted'] == False]
            return jsonify(raw_data)

    def post(self):
        new_contact = json.loads(request.data)
        _PeopleDb = PeopleDatabase()
        _PeopleDb.save(new_contact)
        all_contacts = _PeopleDb.load()
        return jsonify(all_contacts)

    def delete(self):
        pass
