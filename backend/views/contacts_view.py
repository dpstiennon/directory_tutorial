from flask.views import MethodView
from flask import jsonify, request
import json

from backend.people_database import PeopleDatabase
from backend.db import db
from backend.models.people import People


class ContactsView(MethodView):

    def get(self, contact_id):
        if contact_id is None:
            raw_people = db.session.query(People).all()
            print(raw_people)
            resp = [p.to_json() for p in raw_people]
            return jsonify(resp)

    def post(self):
        new_contact = json.loads(request.data)
        new_person = People(name=new_contact['name'], email=new_contact['email'], address=new_contact['address'], deleted=False)
        db.session.add(new_person)
        db.session.commit()
        return self.get(None)

    def delete(self):
        pass
