from flask import Flask, render_template 
app = Flask(__name__)    


@app.route('/')          
def index():
    return render_template("index.html")

@app.route('/play')
def play():
    return render_template('play.html')

@app.route('/play1/<int:num>')
def play1(num):
    return render_template('play1.html', num=num)

@app.route('/play2/<int:num>/<string:colors>')
def play2(num,colors):
    return render_template('play2.html', num=num,colors=colors)

@app.route('/<path:undefined_route>')
def error(undefined_route):
    return "SORRY! No response. Try again!"

if __name__=="__main__":  
    app.run(debug=True,port=5001) 