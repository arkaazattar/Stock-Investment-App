from flask import Flask
from flask_session import Session
from datetime import timedelta
import os
from dotenv import load_dotenv
from app.routes.home import home_routing_bp
from app.routes.dashboard_route import dashboard_route_bp
from app.routes.auth_routes import login_and_signup_bp, signup_route_bp, login_route_bp

load_dotenv("secretkey.env")

app = Flask(__name__, template_folder="app/templates", static_folder="app/static")
app.secret_key = os.getenv("SECRET_KEY")

app.config.update (
    SESSION_TYPE = "filesystem",
    SESSION_PERMANENT = False, #unless user chooses to remember me defaults is logged out when browser closed
    PERMANENT_SESSION_LIFETIME = timedelta(days=1), #session ends regardless after a day
    SESSION_USE_SIGNER = True
)
Session(app)

app.register_blueprint(home_routing_bp)
app.register_blueprint(login_and_signup_bp)
app.register_blueprint(login_route_bp)
app.register_blueprint(signup_route_bp)
app.register_blueprint(dashboard_route_bp)

if __name__ == "__main__":
    app.run()