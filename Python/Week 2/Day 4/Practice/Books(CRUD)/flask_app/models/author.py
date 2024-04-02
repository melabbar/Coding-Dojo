from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE



class Users:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_at"]
        self.updates_at = data["updated_at"]


    @classmethod
    def create(cls, data):
        query = """
                INSERT INTO books_schema.users (name)
                VALUES(%(name)s);
                """
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_by_id(cls, data):
        query = """
                    SELECT * FROM books_schema.users
                    WHERE id = %(id)s;
            """
        result = connectToMySQL(DATABASE).query_db(query, data)
        if len(result) < 1:
            return False
        return Users(result[0])