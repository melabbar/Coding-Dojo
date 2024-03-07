
from mysqlconnection import connectToMySQL

class Users:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['update_at']
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM user_cr.user;"
        results = connectToMySQL('user_cr').query_db(query)
        all_users = []
        for user in results:
            all_users.append(cls(user))

        return all_users
            
    @classmethod
    def new(cls,data):
        query = """
                    INSERT INTO user_cr.user (first_name,last_name,email) values(%(first_name)s,%(last_name)s,%(email)s);
                """
        results = connectToMySQL('user_cr').query_db(query,data)
        

        return results