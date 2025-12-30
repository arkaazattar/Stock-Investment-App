from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__, instance_relative_config=True)
CORS(app)

@app.route('/')
def home():
    return render_template("index.html")

app.run()