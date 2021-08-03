from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from backend.people_database import PeopleDatabase
from backend.views.accounts_view import AccountsView
from backend.views.contacts_view import ContactsView
from sqlalchemy.engine import URL
from backend.db import db
import os

app = Flask(__name__)
CORS(app)
config_file_name = os.environ['CONFIG']

app.config.from_json(config_file_name)

db.init_app(app)


def register_api(view, endpoint, url, pk='id', pk_type='int'):
    view_func = view.as_view(endpoint)
    app.add_url_rule(url, defaults={pk: None},
                     view_func=view_func, methods=['GET',])
    app.add_url_rule(url, view_func=view_func, methods=['POST',])
    app.add_url_rule(f'{url}/<{pk_type}:{pk}>', view_func=view_func,
                     methods=['GET', 'PUT', 'DELETE'])


register_api(AccountsView, 'accounts', '/api/accounts', 'account_id')
register_api(ContactsView, 'contacts', '/api/contacts', 'contact_id')