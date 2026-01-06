# all of these will be split into routing folders where only the functions are required
# each file needs the render_template import at minimum
from flask import render_template, request, session, redirect
from azure.SQLDB.users import user_exists, user_pwd_matches

def login_and_signup_route():
    return render_template("auth/login_and_signup.html")

def signup_route():
    return render_template("auth/signup/signup.html")

def login_route():
    """
    First Check:
    if session dict has name key means user alr signed in so just sent straight to dashboard
    otherwise session dict has falsey name key value pair login process as normal

    Second Check:
    if method is POST means that user pressed submit on form
    otherwise method is GET so just displays login page for user to fill in fields

    Third Check:
    if username's password hashed matches what's in db sent through to dashboard
    otherwise if 

    """
    if not session.get("username"):
        if request.method == "POST":
            session["username"] = request.form.get("username")
            if user_exists(session["username"]):
                if user_pwd_matches(session["username"], request.form.get("password")):
                    session.permanent = True
                    return redirect("auth/login/wrongpassword")
                else:
                    return redirect("auth/login/wrongpassword")
            else:
                session.pop("username")
                return redirect("auth/login/promptsignup")
            return render_template("auth/login/login.html")
    return redirect("dashboard.html")



