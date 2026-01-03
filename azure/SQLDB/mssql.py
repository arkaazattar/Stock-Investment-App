import pyodbc as odbc
import pandas as pd
import os
from dotenv import load_dotenv

load_dotenv()

conn = odbc.connect(
    f"""
    Driver={{ODBC Driver 18 for SQL Server}};
    Server={os.getenv("DB_SERVER")};
    Database={os.getenv("DB_NAME")};
    UID={os.getenv("DB_USERNAME")};
    PWD={os.getenv("DB_PASSWORD")};
    Encrypt=yes;
    TrustServerCertificate=no;
    """
)

#queries to be implemented
sql = '''

'''
cursor = conn.cursor()
cursor.execute(sql)

#panda data frame processing to be implemented here
