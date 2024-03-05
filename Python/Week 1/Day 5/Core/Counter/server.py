from flask import Flask, render_template, request, redirect, session   
app = Flask(__name__)    
app.secret_key = "secret"


@app.route('/')
def index():
    if "visit" not in session:
        session['visit'] =1
    else:
        session['visit']+=1
    if "visits" not in session:
        session['visits'] =1
    else:
        session['visits']+=1

    print(session['visit'])


    return render_template("index.html") 


@app.route('/add', methods=['post'])
def add():
    session['visit']+=1
    session['visits']-=1
    return redirect('/')

@app.route('/increment', methods=['post'])
def increment():
        session['visit']+=int(request.form["increment"])
        session['visits']-=1
        return redirect('/')
@app.route('/destroy_session', methods=["post"])
def destroy():
    session.clear()
    
    return redirect("/")



@app.route('/<path:undefined_route>')
def error(undefined_route):
    return "SORRY! No response. Try again!"

if __name__=="__main__":  
    app.run(debug=True,port=5002) 