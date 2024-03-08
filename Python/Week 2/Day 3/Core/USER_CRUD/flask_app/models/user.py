
from flask_app.config.mysqlconnection import connectToMySQL

class Users:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['update_at']
    
    
    
    
    
    # ---------------- SHOW ALL ---------------


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM user_cr.user;"
        results = connectToMySQL('user_cr').query_db(query)
        all_users = []
        for user in results:
            all_users.append(cls(user))

        return all_users
            
    # ---------------- ADD ELEMENT ---------------

    @classmethod
    def new(cls,data):
        query = """
                    INSERT INTO user_cr.user (first_name,last_name,email) values(%(first_name)s,%(last_name)s,%(email)s);
                """
        results = connectToMySQL('user_cr').query_db(query,data)
        return results
    

    # ---------------- ADD SPECIFIC ELEMENT ---------------

    @classmethod
    def show_one(cls,id):
        query = "SELECT * FROM user_cr.user WHERE id = %(id)s ;"
        data ={
        'id':id
    }
        results = connectToMySQL('user_cr').query_db(query,data)
        return cls(results[0])
    

    # ---------------- EDIT ELEMENT ---------------

    @classmethod
    def update(cls, data):    
        query = """
                    UPDATE user_cr.user 
                    SET first_name=%(first_name)s,last_name=%(last_name)s,email=%(email)s 
                    WHERE id = %(id)s;
                """
        results = connectToMySQL('user_cr').query_db(query, data)
        return results
    
    # ---------------- DELETE ELEMENT ---------------
    @classmethod
    def delete(cls, id):
        query  = "DELETE FROM user_cr.user WHERE id = %(id)s;"
        data = {"id": id}
        return connectToMySQL('user_cr').query_db(query, data)