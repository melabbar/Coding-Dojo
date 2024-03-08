from flask import Flask, render_template, request, redirect
from User import Users

app = Flask(__name__)

@app.route('/')
def index():
    user1 = Users.get_all()
    return render_template("index.html", user=user1)

@app.route('/create')
def new():
    return render_template('create.html')

# ---------------- ADD ELEMENT ---------------

@app.route('/add_user', methods=['post'])
def add_user():
    
    id= Users.new(request.form)
    return redirect(f'/user/{id}')

# ---------------- SHOW SPECIFIC ELEMENT ---------------

@app.route('/user/<int:id>')
def display(id):
    return render_template("users.html", show=Users.show_one(id))
            
# ---------------- EDIT ELEMENT ---------------
@app.route('/user/edit/<int:id>')
def edit(id): 
    show=Users.show_one(id)
    return render_template("edit.html", user=show)

@app.route('/user/<int:id>/edits/', methods=['post'])
def edits(id):
    user_edit={
        **request.form,
        'id': id
    }
    Users.update(user_edit)
    return redirect(f'/user/{id}')
# ---------------- DELETE ELEMENT ---------------

@app.route('/user/delete/<int:id>')
def delete(id):
    Users.delete(id)
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True, port=5001)

