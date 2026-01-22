"""
Route which pulls the active user session. "user" will be set to either 
session username, or Guest.
"""

from flask import Blueprint, session, jsonify
user_bp = Blueprint('/user', __name__)

@user_bp.route('/user')
def user():
    user = session.get("username") 
    return jsonify({
        "user" : user or "Guest"
    })