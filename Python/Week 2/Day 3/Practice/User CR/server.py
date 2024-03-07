from flask import Flask, render_template, request, redirect, session
# import the class from friend.py
from User import Users
app = Flask(__name__)

@app.route('/')
def index():
    user1 = Users.get_all()
    return render_template("index.html", user=user1)



@app.route('/create', methods=['post'])
def new():
    return render_template('create.html')

@app.route('/add_user', methods=['post'])
def add_user():
    Users.new(request.form)
    return redirect('/')

            



if __name__ == "__main__":
    app.run(debug=True, port=5001)

