from flask_app import app
from flask import redirect, render_template, request
from flask_app.models.dojos import Dojo

@app.route('/')
def home():
    all_dojo = Dojo.get_all()
    return render_template("index.html", dojo=all_dojo)

@app.route('/add_dojo', methods=['post'])
def new_dojo():
    
    data = {
        "name": request.form["name"]
    }
    dojo_id= Dojo.new(data)
    return redirect('/')


@app.route('/dojos/<int:id>')
def show_ninjas_in_dojo(id):
    data = {
        "id": id
    }
    return render_template('show_ninja.html', dojo = Dojo.dojo_ninja(data))