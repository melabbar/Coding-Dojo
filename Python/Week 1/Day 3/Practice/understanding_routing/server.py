from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"


@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/say/<string:title>')
def say(title):
    print(title)
    return f"Hi {title}!"

@app.route('/repeat/<int:num>/<string:title>')
def repeat(title, num):
    print(num,title)
    return f"Hi {title} <br>"*num

@app.route('/<path:undefined_route>')
def error(undefined_route):
    return "SORRY! No response. Try again!"

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True,port=5001)    # Run the app in debug mode.

