from flask_app import app
#! ALWAYS REMEMBER TO IMPORT CONTROLLERS

from flask_app.controllers import author_controller

if __name__ == "__main__":
    app.run(debug=True, port=5002)