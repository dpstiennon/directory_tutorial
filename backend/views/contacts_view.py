from flask.views import MethodView
from flask import jsonify, request
import json

from backend.people_database import PeopleDatabase
from backend.db import db
from backend.models.people import People
from flask_jwt import jwt_required, current_identity


class ContactsView(MethodView):

    @jwt_required()
    def get(self, contact_id):
        if contact_id is None:
            raw_people = db.session.query(People).filter(People.account_id == current_identity.id).all()
            print(raw_people)
            resp = [p.to_json() for p in raw_people]
            return jsonify(resp)

    @jwt_required()
    def post(self):
        new_contact = json.loads(request.data)
        new_person = People(name=new_contact['name'],
                            email=new_contact['email'],
                            address=new_contact['address'],
                            account_id=current_identity.id,
                            deleted=False)
        db.session.add(new_person)
        db.session.commit()
        return self.get(None)

    def delete(self):
        pass
