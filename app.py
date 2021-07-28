from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from backend.people_database import PeopleDatabase
from backend.views.accounts_view import AccountsView
from backend.views.contacts_view import ContactsView

app = Flask(__name__)
CORS(app)


def register_api(view, endpoint, url, pk='id', pk_type='int'):
    view_func = view.as_view(endpoint)
    app.add_url_rule(url, defaults={pk: None},
                     view_func=view_func, methods=['GET',])
    app.add_url_rule(url, view_func=view_func, methods=['POST',])
    app.add_url_rule(f'{url}<{pk_type}:{pk}>', view_func=view_func,
                     methods=['GET', 'PUT', 'DELETE'])


register_api(AccountsView, 'accounts', '/api/accounts', 'account_id')
register_api(ContactsView, 'contacts', '/api/contacts', 'contact_id')