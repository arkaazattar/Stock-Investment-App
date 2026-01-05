from flask import Flask
from app.routes.routes import home_routing
from app.routes.dashboard_route import dashboard_routing
from app.routes.auth_routes import signup_route, login_route

app = Flask(__name__, template_folder="app/templates", static_folder="app/static")

## ALL APP ROUTING WILL GO HERE NOW e.g: ##

# @app.route("/dashboard")
# def dashboard():
#   return dashboard_route() 
# where dashboard_route() is imported from dashboard_route.py

@app.route('/')
def home():
    return home_routing()

@app.route('/dashboard')
def dashboard():
    return dashboard_routing()

@app.route("/login")
def login():
    return login_route()


@app.route("/signup")
def signup():
    return signup_route()

if __name__ == "__main__":
    app.run()