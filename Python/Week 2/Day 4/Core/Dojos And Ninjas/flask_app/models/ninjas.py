from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE




class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        



#----------------------- ALL NINJAS ----------------------------
    @classmethod
    def get_all_ninjas(cls):
        query = "SELECT name FROM dojos_and_ninjas_schema.dojos;"
        results = connectToMySQL(DATABASE).query_db(query)
        all_ninja = []
        for ninja in results:
            all_ninja.append(cls(ninja))        
        return all_ninja

    @classmethod
    def add(cls, data):
        query= """
               INSERT INTO dojos_and_ninjas_schema.ninjas (first_name, last_name, age, dojo_id) VALUES (%(first_name)s,%(last_name)s,%(age)s,%(dojo_id)s);
               """
        results = connectToMySQL(DATABASE).query_db(query, data)
        return results