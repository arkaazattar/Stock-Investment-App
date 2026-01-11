from flask import render_template, redirect, session, url_for

def dashboard_routing():
    """
    checks session data to determine if user has signed in yet or not requiring rerouting
    """
    if not session.get("username"):
        return redirect("/login")
    return render_template("dashboard.html")
