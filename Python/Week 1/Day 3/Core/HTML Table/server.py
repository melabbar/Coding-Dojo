from flask import Flask, render_template 
app = Flask(__name__)    


@app.route('/index')
def index():

    users = [
        {'first_name' : 'Michael', 'last_name' : 'Choi'},
        {'first_name' : 'John', 'last_name' : 'Supsupin'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
    return render_template("index.html", user = users)



@app.route('/<path:undefined_route>')
def error(undefined_route):
    return "SORRY! No response. Try again!"

if __name__=="__main__":  
    app.run(debug=True,port=5001) 