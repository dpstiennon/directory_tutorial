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
        # Connect to DB
        conn = get_db_conn()
        # by default, cursor.execute will return a list of tuples.
        # passing in cursor_factory=RealDictCursor causes the cursor to produce a dict instead,
        # which is a little easier to work with
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        # NEVER EVER use plain ol' Python string concatenation to compose these strings of sql.
        # it opesn up a SQL injection vulnerability a la https://xkcd.com/327/
        # instead, use the %(variable_name)s, and then supply the values
        # as a dictionary in the call to cursor.execute
        # psychopg2 will escape any sql control characters

        query = """
        INSERT INTO directory.public.people (name, address, email) 
         VALUES (%(name)s, %(address)s, %(email)s)"""
        cursor.execute(query,
                       dict(name=new_contact['name'],
                            address=new_contact['address'],
                            email=new_contact['email'])
                       )
        # Doesn't get saved to the datbase until you call this
        conn.commit()
