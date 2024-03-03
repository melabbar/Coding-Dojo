from flask import Flask, render_template 
app = Flask(__name__)    


@app.route('/row/<int:x>/')
def index(x):
    return render_template("index.html", x=x)


@app.route('/checker/<int:x>/<int:y>')
def index1(x,y):
    return render_template("index.html", x=x,y=y)


@app.route('/colors/<int:x>/<int:y>/<string:color1>/<string:color2>')
def index2(x,y,color1,color2):
    return render_template("index.html", x=x,y=y,color1=color1,color2=color2)

@app.route('/<path:undefined_route>')
def error(undefined_route):
    return "SORRY! No response. Try again!"

if __name__=="__main__":  
    app.run(debug=True,port=5001) 