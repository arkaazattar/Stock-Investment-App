# all of these will be split into routing folders where only the functions are required
# each file needs the render_template import at minimum
from flask import render_template, request, session, redirect, Blueprint
from azure_cloud.SQLDB.users import user_exists, user_pwd_matches, user_signup

login_and_signup_bp = Blueprint("login_and_signup", __name__)
signup_route_bp = Blueprint("signup_route", __name__)
login_route_bp = Blueprint("login_route", __name__)


@login_and_signup_bp.route("/login_and_signup")
def login_and_signup_route():
    return render_template("auth/login_and_signup.html")

@signup_route_bp.route("/signup", methods=["GET", "POST"])
def signup_route():
    """
    First Check:
    if session dict has name key means user alr signed in so just sent straight to dashboard
    otherwise session dict has falsey name key value pair login process as normal

    Second Check:
    if method is POST means that user pressed submit on form
    otherwise method is GET so just displays signup page for user to fill in fields

    Third Check:
    if username exists in DB alr sent to sign in otherwise user_signup is attempted and if error then just reloads page

    """
    if not session.get("username"):
        if request.method == "POST":
            session["username"] = request.form.get("username")
            if user_exists(session["username"]):
                session.pop("username")
                return redirect("auth/login/promptlogin")
            else:
                if user_signup(session["username"], request.form.get("password")):
                    return render_template("getstarted.html")
                else:
                    session.pop("username")
                    render_template("auth/signup/signup.html")
        else:
            return render_template("auth/signup/signup.html")
    return render_template("getstarted.html")

@login_route_bp.route("/login", methods=["GET", "POST"])
def login_route():
    """
    First Check:
    if session dict has name key means user alr signed in so just sent straight to dashboard
    otherwise session dict has falsey name key value pair login process as normal

    Second Check:
    if method is POST means that user pressed submit on form
    otherwise method is GET so just displays login page for user to fill in fields

    Third Check:
    if username exists in DB then proceed to check if username's password hashed matches what's in DB to be sent through to dashboard
    otherwise if username doesn't exist in DB or password hash doesn't match sent to promptsignup and wrongpassword respectively

    """
    if not session.get("username"):
        if request.method == "POST":
            session["username"] = request.form.get("username")
            if user_exists(session["username"]):
                if user_pwd_matches(session["username"], request.form.get("password")):
                    if request.form.get("rememberme"):
                        session.permanent = True
                    return render_template("getstarted.html")
                else:
                    session.pop("username")
                    print("Password mismatch")
                    return redirect("auth/login/wrongpassword")
            else:
                session.pop("username")
                return redirect("auth/login/promptsignup")
        else:
            return render_template("auth/login/login.html") 
    return render_template("getstarted.html")



