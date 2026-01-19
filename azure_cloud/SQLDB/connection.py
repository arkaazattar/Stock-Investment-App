import pyodbc as odbc
import os
from dotenv import load_dotenv

env_path = os.path.join(os.path.dirname(__file__), "credentials.env")
load_dotenv(env_path)

def get_connection():
    '''
    Getting connection to Azure SQL Server Database 
    '''
    #if load_dotenv(env_path):
    #    print("\n\n\nLoad dotenv works\n\n\n")
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
