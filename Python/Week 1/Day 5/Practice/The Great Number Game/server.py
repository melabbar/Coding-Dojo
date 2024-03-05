from flask import Flask, render_template, request, redirect, session  
import random 
app = Flask(__name__)    
app.secret_key = "secret"

@app.route('/')
def home():
    if 'number' not in session:
        session['number'] = random.randint(1,100)
    return render_template('index.html')


@app.route('/guess', methods=['post'])
def guess():
    session['guess'] = int(request.form['guess'])
    if 'x' not in session:
        session['x']=1
    else:
        session['x']+=1
    return redirect('/')

@app.route('/reset', methods=['post'])
def clear():
    session.clear()
    return redirect('/')

@app.route('/<path:undefined_route>')
def error(undefined_route):
    return "SORRY! No response. Try again!"

if __name__=="__main__":  
    app.run(debug=True,port=5002) 