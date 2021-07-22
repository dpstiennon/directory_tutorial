from backend.db import get_db_conn
from psycopg2.extras import RealDictCursor


class PeopleDatabase():
    def load(self):
        conn = get_db_conn()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        query = """
        SELECT * from directory.public.people
        """
        cursor.execute(query)
        data = cursor.fetchall()
        return data

    def save(self, new_contact):
        conn = get_db_conn()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        query = """
        INSERT INTO directory.public.people (name, address, email) 
         VALUES (%(name)s, %(address)s, %(email)s)"""
        cursor.execute(query,
                       dict(name=new_contact['name'],
                            address=new_contact['address'],
                            email=new_contact['email'])
                       )
        conn.commit()
