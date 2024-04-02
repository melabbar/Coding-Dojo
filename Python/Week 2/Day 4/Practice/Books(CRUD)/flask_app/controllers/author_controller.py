from flask_app import app
from flask import redirect, render_template, request, flash, session
from flask_bcrypt import Bcrypt

from flask_app.models.author import Users

bcrypt = Bcrypt(app)


@app.route("/")
def info_page():
    return render_template("index.html")

@app.route("/home")
def dash():
    data = {"id": id}
    
    author = Users.get_by_id(data)
    print("===> current_user:", author)
    return redirect("/", author=author)