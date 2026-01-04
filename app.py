from flask import Flask

app = Flask(__name__)

## ALL APP ROUTING WILL GO HERE NOW e.g: ##

# @app.route("/dashboard")
# def dashboard():
#   return dashboard_route() 
# where dashboard_route() is imported from dashboard_route.py


if __name__ == "__main__":
    app.run()