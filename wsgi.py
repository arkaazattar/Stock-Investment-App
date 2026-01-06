from flask import Flask
from flask_session import Session
from datetime import timedelta
from app.routes.routes import home_routing
from app.routes.dashboard_route import dashboard_routing
from app.routes.auth_routes import signup_route, login_route, login_and_signup_route

app = Flask(__name__, template_folder="app/templates", static_folder="app/static")

app.config.update (
    SESSION_TYPE = "filesystem",
    SESSION_PERMANENT = False, #unless user chooses to remember me defaults is logged out when browser closed
    PERMANENT_SESSION_LIFETIME = timedelta(days=1), #session ends regardless after a day
    SESSION_USE_SIGNER = True
)
Session(app)

@app.route('/')
def home():
    return home_routing()

@app.route("/login_and_signup")
def login_and_signup():
    return login_and_signup_route()

@app.route("/login", methods=["GET", "POST"])
def login():
    return login_route()


@app.route("/signup")
def signup():
    return signup_route()

@app.route('/dashboard')
def dashboard():
    return dashboard_routing()

if __name__ == "__main__":
    app.run()