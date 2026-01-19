from flask import render_template, Blueprint
home_routing_bp = Blueprint('/', __name__)

@home_routing_bp.route('/')
def home_routing():
    return render_template("index.html")
