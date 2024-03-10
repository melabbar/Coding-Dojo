from flask import Flask

app = Flask(__name__)
DATABASE = "dojos_and_ninjas_schema"
app.secret_key = "Its_a_Secret_shhhhhhh"