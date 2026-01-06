import pandas as pd
from .connection import get_connection
from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError, VerificationError

def user_exists(username: str) -> bool:
    """
    returns true if provided username exists in dbo.users false otherwise
    """
    sql = '''
    SELECT username FROM dbo.users WHERE username = ?
    '''
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(sql, (username,))
    row = cursor.fetchone()
    if row is None:
        return False
    return True

def user_pwd_matches(username: str, password: str) -> int:
    """
    returns 0 if provided password hashed matches the hashed password attributed to the provided username in dbo.users
    returns 1 if provided password does not match
    returns -1 if verification fails for another reason
    """
    sql = '''
    SELECT password_hash FROM dbo.users WHERE username = ?
    '''
    conn = get_connection()
    cursor = conn.cursor()
    ph = PasswordHasher()
    cursor.execute(sql, (username,))
    row = cursor.fetchone()
    if row is None:
        return False
    try:
        ph.verify(row[0], password) #row[0] contains hashed pw from db
        return True
    except Exception:
        return False

    #Below is if we want to handle password not matching and retrieving errors seperately    
    # except VerifyMismatchError:
    #     return False
    # except VerificationError:
    #     return 
    

    


#queries to be implemented

#panda data frame processing to be implemented here