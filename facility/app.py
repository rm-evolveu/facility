import random

from flask import Flask, render_template
from flask_cors import CORS
import sqlite3

app = Flask(__name__, template_folder = 'build', static_folder = 'build/static')
CORS(app)

# cities = []
# counter = 0

# this is just for warmup
@app.route('/hello')
def hello():
   return 'Hello from backend'

@app.route('/test')
def test():
   return render_template('test.html', cities = cities, name = "Barbara", number = 10)

@app.route('/services/randomcity')
def services_randomcity():
   randomCities = [
      'Madrid', 'Hamburg', 'Rome', 'Kaoshiung',
      'Brisbane', 'Shantou', 'Warsaw', 'Hangzhou',
      'Fortaleza', 'Chengdu', 'Kwangju', 'Kano',
      'Houston', 'Casablanca', 'Fukuoka', 'Hanoi',
      'Karachi', 'Dhaka', 'Beijing', 'Saigon'
   ]
   return { 'Name': random.choice(randomCities) }

@app.route('/react')
def react():
   return render_template('index.html')

#database helpers
def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

def run_query(query):
   connection = sqlite3.connect("cities.db")
   connection.row_factory = dict_factory
   cursor = connection.cursor()
   cursor.execute(query)
   connection.commit()
   rows = cursor.fetchall()
   connection.close()
   return rows
   
# now the real api
@app.route('/api/all')
def api_all():
   try:
      query = ('SELECT * FROM cities')
      rows = run_query(query)
      response = {'Cities': rows, 'Status': 0 }
   except:
      response = {'Status': -1 }
   return response

   


@app.route('/api/add/<string:name>/<string:population>/<string:longitude>/<string:latitude>')
def api_add(name, population, longitude, latitude):
   try:
      query = "INSERT INTO cities ('Name', 'Population', 'Longitude', 'Latitude') VALUES (" + \
            "'" + name + "'" + "," + population + "," + longitude + "," + latitude + ")"
      run_query(query)
      response = {'Status': 0 }
   except:
      response = {'Status': -1 }
   return response

@app.route('/api/delete/<string:counter>')
def api_delete(counter):
   try:
      query = "DELETE FROM cities WHERE Counter = " + counter
      run_query(query)
      response = {'Status': 0 }
   except:
      response = {'Status': -1 }
   return response

@app.route('/api/movein/<string:counter>/<int:how_many>')
def api_movein(counter, how_many):
   try:
      query = "SELECT Population FROM cities WHERE Counter = " + counter
      query_result = run_query(query)
      if (len(query_result) == 0):
         response = {'Status': -1}
      else:
         new_population = query_result[0]['Population'] + how_many
         query = "UPDATE cities SET Population = " + str(new_population) + " WHERE Counter = " + counter
         run_query(query)
         response = {'Status': 0 }
   except:
         response = {'Status': -1}

   return response
   
@app.route('/api/moveout/<string:counter>/<int:how_many>')
def api_moveout(counter, how_many):
   try:
      query = "SELECT Population FROM cities WHERE Counter = " + counter
      query_result = run_query(query)
      if (len(query_result) == 0):
         response = {'Status': -1}
      else:
         current_population = query_result[0]['Population']
         if (current_population <= how_many):
            raise
         else:
            new_population = query_result[0]['Population'] - how_many
            query = "UPDATE cities SET Population = " + str(new_population) + " WHERE Counter = " + counter
            run_query(query)
            response = {'Status': 0 }
   except:
         response = {'Status': -1}

   return response
   
if __name__ == '__main__':
   app.run(host = '0.0.0.0', debug = True)