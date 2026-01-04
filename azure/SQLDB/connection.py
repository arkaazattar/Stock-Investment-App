import pyodbc as odbc
import os
from dotenv import load_dotenv

load_dotenv()

def get_connection():
    '''
    Getting connection to Azure MSSQL Server Database 
    '''
    return odbc.connect(
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
