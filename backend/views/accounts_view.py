from flask.views import MethodView
from flask import jsonify, request
from backend.models.accounts import Accounts
from marshmallow import ValidationError
from backend.models.people import People
from backend.validations.accounts_schema import AccountsSchema
from backend.db import db

class AccountsView(MethodView):
    def get(self, account_id):
        schema = AccountsSchema(only=['name', 'email'])
        this_account = db.session.query(Accounts)\
            .filter(Accounts.id == account_id)\
            .first()
        account_json = schema.dump(this_account)
        contacts_json = [person.to_json() for person in this_account.people]

        return jsonify(dict(account=account_json, contacts=contacts_json))

    def post(self):
        account_schema = AccountsSchema()
        try:
            result = account_schema.load(request.json)
            new_account = Accounts(
                name=result['name'],
                email=result['email'],
                password=result['password']
            )
            db.session.add(new_account)
            db.session.commit()
        except ValidationError as e:
            return jsonify(e.messages), 400
        return jsonify({'success': True})

    def delete(self, account_id):
        pass

    def put(self, account_id):
        pass