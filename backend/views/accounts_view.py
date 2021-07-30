from flask.views import MethodView
from flask import jsonify, request
from backend.models.accounts import Accounts
from marshmallow import ValidationError

from backend.validations.accounts_schema import AccountsSchema
from backend.db import db

class AccountsView(MethodView):
    def get(self, account_id):
        account_id = 1
        this_account = db.session.query(Accounts).filter(Accounts.id == account_id)\
            .first()
        print(this_account)
        print(this_account.people)
        return jsonify({'success': True})

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