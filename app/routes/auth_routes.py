# all of these will be split into routing folders where only the functions are required
# each file needs the render_template import at minimum
from flask import render_template


def signup_route():
    return render_template("auth/signup.html")

def login_route():
    return render_template("auth/login.html")


