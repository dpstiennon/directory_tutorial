from flask.views import MethodView
from flask import jsonify, request

class AccountsView(MethodView):
    def get(self, account_id):
        pass

    def post(self):
        print(request.json)
        print(request.json)
        print(request.json)
        return jsonify({'success': True})

    def delete(self, account_id):
        pass

    def put(self, account_id):
        pass