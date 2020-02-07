#!/usr/bin/python3
import os
import sys
import nltk
import psycopg2
from psycopg2 import sql
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT


def main():
    
    DB_NAME = 'plugandplay'
    DB_USER = 'plugandplayuser'
    DB_PASS = 'password'

    # Create a table in the PostgresSQL
    conn = psycopg2.connect(database = 'postgres')
    
    conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)    
    cur = conn.cursor()
    
    try:
        cur.execute(sql.SQL("create database {};").format(sql.Identifier(DB_NAME)))
        cur.execute(sql.SQL("create user {} with password {};")
                .format(sql.Identifier(DB_USER), sql.Identifier(DB_PASS)))
        cur.execute(sql.SQL("grant all privileges on database {}, to {};")
                .format(sql.Identifier(DB_NAME), sql.Identifier(DB_USER)))
    except:
        print("Oops! An exception has occured:", error)
        print("Exception TYPE:", type(error))
    conn.commit() 
    conn.close()
    cur.close()

    # Download stopwords in project directory
    nltk_data = os.getcwd() + "/venv/nltk_data"
    print("nltk_data dir: {}", nltk_data)
    nltk.download('stopwords', nltk_data)

    # Create .env file with default database setting
    try:
        f = open(".env", "w+")
    except OSError:
        print('Could not create or open', ".env")
    else:
        f.write("DB_NAME=plugandplay\n")
        f.write("DB_USER=plugandplayuser\n")
        f.write("DB_PASS=password\n")
        f.write("DEBUG=true\n")
        f.write("SECRET_KEY=)(4n2@p0+1c)5b0c9%!-5+f$e^y=mo!t4n9z)p&@wowe=inu3l\n")
        f.close()
        print ("Created .env with default setting")


if __name__ == '__main__':
    main()
