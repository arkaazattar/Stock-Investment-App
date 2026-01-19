from flask import render_template, redirect, session, Blueprint

dashboard_route_bp = Blueprint("dashboard", __name__)

@dashboard_route_bp.route('/dashboard')
def dashboard_routing():
    """
    checks session data to determine if user has signed in yet or not requiring rerouting
    """
    if not session.get("username"):
        return redirect("/login")
    return render_template("dashboard.html")
