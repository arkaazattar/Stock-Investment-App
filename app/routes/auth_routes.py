# all of these will be split into routing folders where only the functions are required
# each file needs the render_template import at minimum
from flask import render_template, request, session, redirect
from azure_cloud.SQLDB.users import user_exists, user_pwd_matches

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
    
    #tests to be removed once everything works

    if not session.get("username"):
        if request.method == "POST":
            session["username"] = request.form.get("username")
            if user_exists(session["username"]):
                print("\n\nGOT HERE\n\n")
                if user_pwd_matches(session["username"], request.form.get("password")):
                    if request.form.get("rememberme"):
                        session.permanent = True
                        # print("Correct credentials")
                    return render_template("getstarted.html")
                else:
                    session.pop("username")
                    print("Password mismatch")
                    return redirect("auth/login/wrongpassword")
            else:
                # print("user doesn't exist yet")
                session.pop("username")
                return redirect("auth/login/promptsignup")
        else:
            return render_template("auth/login/login.html") 
    # print("User alr existed") #DELETE BEFORE COMITTING
    return render_template("getstarted.html")



