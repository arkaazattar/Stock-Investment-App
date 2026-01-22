from flask import Blueprint
home_routing_bp = Blueprint('/', __name__)

@home_routing_bp.route('/homepage')
def home_routing():
    return {
        'home_page' : True
    }