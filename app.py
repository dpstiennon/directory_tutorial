from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import bcrypt
from backend.models.accounts import Accounts
from backend.people_database import PeopleDatabase
from backend.views.accounts_view import AccountsView
from backend.views.contacts_view import ContactsView
from sqlalchemy.engine import URL
from backend.db import db
from flask_jwt import JWT
import os

app = Flask(__name__)
CORS(app)
config_file_name = os.environ['CONFIG']

app.config.from_json(config_file_name)

db.init_app(app)

def authentication(username, password):
    user = db.session.query(Accounts).filter(Accounts.email == username).one()
    if bcrypt.checkpw(password.encode(), user.password.encode()):
        return user

def identity(identity):
    user = db.session.query(Accounts).filter(Accounts.id == identity['identity']).one()
    return user


JWT(app, authentication, identity)


def register_api(view, endpoint, url, pk='id', pk_type='int'):
    view_func = view.as_view(endpoint)
    app.add_url_rule(url, defaults={pk: None},
                     view_func=view_func, methods=['GET',])
    app.add_url_rule(url, view_func=view_func, methods=['POST',])
    app.add_url_rule(f'{url}/<{pk_type}:{pk}>', view_func=view_func,
                     methods=['GET', 'PUT', 'DELETE'])


register_api(AccountsView, 'accounts', '/api/accounts', 'account_id')
register_api(ContactsView, 'contacts', '/api/contacts', 'contact_id')