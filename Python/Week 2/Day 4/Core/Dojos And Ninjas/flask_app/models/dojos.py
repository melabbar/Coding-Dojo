from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models.ninjas import Ninja

class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        self.ninja = []


#------------------  SHOW ALL ---------------------
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos_and_ninjas_schema.dojos;"
        results = connectToMySQL(DATABASE).query_db(query)
        all_dojos = []
        for dojo in results:
            all_dojos.append(cls(dojo))

        return all_dojos
    

#------------------  NEW DOJO ---------------------

    @classmethod
    def new(cls,data):
        query = """
                    INSERT INTO dojos_and_ninjas_schema.dojos (name) values(%(name)s);
                """
        results = connectToMySQL(DATABASE).query_db(query,data)
        return results
    
#------------------  JOIN TABLES ---------------------
    @classmethod
    def dojo_ninja(cls, data):
        query = """
                    SELECT * FROM dojos_and_ninjas_schema.dojos 
                    JOIN dojos_and_ninjas_schema.ninjas On ninjas.dojo_id = dojos.id 
                    WHERE dojos_and_ninjas_schema.dojos.id = %(id)s
                """
        results = connectToMySQL(DATABASE).query_db(query, data)
        dojos = cls(results[0])

        for row_from_db in results:
            ninja_data = {
                "id" : row_from_db['ninjas.id'],
                "first_name" : row_from_db['first_name'],
                "last_name" : row_from_db['last_name'],
                "age" : row_from_db['age'],
                "created_at" : row_from_db['ninjas.created_at'],
                "updated_at" : row_from_db['ninjas.updated_at'],
            }
            dojos.ninja.append( Ninja(ninja_data))
        return dojos
    
    @classmethod
    def delete(cls, id):
        query  = "DELETE FROM dojos_and_ninjas_schema.dojos WHERE id = %(id)s;"
        data = {"id": id}
        return connectToMySQL(DATABASE).query_db(query, data)