import psycopg2
from sqlalchemy import create_engine
from sqlalchemy.engine.url import URL
from flask_sqlalchemy import SQLAlchemy

def get_db_conn():
    return psycopg2.connect(
        host="localhost",
        database="directory",
        port=5432,
        user="",
        password=""
    )

db = SQLAlchemy()