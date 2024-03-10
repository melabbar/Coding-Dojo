from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.dojos import Dojo
from flask_app.models.ninjas import Ninja



@app.route('/ninjas')
def path():
    return render_template("ninja.html", dojos = Dojo.get_all())

@app.route('/new/ninja', methods=['POST'])
def new_ninja():
    Ninja.add(request.form)    
    return redirect('/')