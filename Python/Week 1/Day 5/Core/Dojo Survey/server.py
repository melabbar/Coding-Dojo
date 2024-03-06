from flask import Flask, render_template, request, redirect, session  
import random 
app = Flask(__name__)    
app.secret_key = "secret"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/result', methods=['post'])
def display():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['lang'] = request.form['language']
    session['comment'] = request.form['comment']
    return redirect('/result')


@app.get("/result")
def result(): 
    return render_template('result.html')


#-----------------------------------------------------------
@app.route('/reset', methods=['post'])
def clear():
    session.clear()
    return redirect('/')

@app.route('/<path:undefined_route>')
def error(undefined_route):
    return "SORRY! No response. Try again!"

if __name__=="__main__":  
    app.run(debug=True,port=5002) 