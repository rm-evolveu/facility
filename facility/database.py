import sqlite3

connection = sqlite3.connect("cities.db")
cursor = connection.cursor()

create_table = "CREATE TABLE IF NOT EXISTS cities (Counter INTEGER PRIMARY KEY AUTOINCREMENT, Name VARCHAR(50), Population INT, Latitude REAL, Longitude REAL)"
cursor.execute(create_table)

connection.commit()

connection.close()