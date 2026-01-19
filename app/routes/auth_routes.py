# all of these will be split into routing folders where only the functions are required
# each file needs the render_template import at minimum
from flask import render_template, request, session, redirect
from azure_cloud.SQLDB.users import user_exists, user_pwd_matches, user_signup

def login_and_signup_route():
    return render_template("auth/login_and_signup.html")

def signup_route():
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
                    render_template("auth/signup/signup.html")
        else:
            return render_template("auth/signup/signup.html") 
    return render_template("getstarted.html")

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



