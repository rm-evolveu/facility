import random

from flask import Flask, render_template
from flask_cors import CORS
import sqlite3

app = Flask(__name__, template_folder = 'build', static_folder = 'build/static')
CORS(app)

cities = []
counter = 0

# # please remove this block when you're done with hardcoded cities
# cities = [ 
#       {'Name': 'Calgary', 'Population': 5000, 'Longitude': 0, 'Latitude': 20, 'Counter': 1},
#       {'Name': 'Mogadisho', 'Population': 500, 'Longitude': 1, 'Latitude': 10, 'Counter': 2},
# ]
# counter = 2
# # end of block to remove



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

# now the real api
@app.route('/api/all')
# def api_all():
#    return { 'Cities': cities }
def api_all():
   connection = sqlite3.connect("cities.db")
   connection.row_factory = dict_factory
   cursor = connection.cursor()
   query = "SELECT * FROM CITIES"
   cursor.execute(query)
   connection.commit()
   rows = cursor.fetchall()
   connection.close()
   return {'Cities': rows }



@app.route('/api/add/<string:name>/<int:population>/<int:longitude>/<int:latitude>')
def api_add(name, population, longitude, latitude):
   global cities, counter
   counter = counter + 1
   new_city = {'Name': name, 'Population': population, 'Longitude': longitude, 'Latitude': latitude, 'Counter': counter}
   cities.append ( new_city )
   return new_city

@app.route('/api/delete/<int:counter>')
def api_delete(counter):
   global cities
   for i in range (0, len(cities) ):
      if counter == cities[i]['Counter']:
         deleted_city = cities[i]         
         del cities[i]
         break

   return deleted_city

@app.route('/api/movein/<int:counter>/<int:how_many>')
def api_movein(counter, how_many):
   global cities
   for i in range (0, len(cities) ):
      if counter == cities[i]['Counter']:
         cities[i]['Population'] = cities[i]['Population'] + how_many
         modified_city = cities[i]         
         break

   return modified_city

@app.route('/api/moveout/<int:counter>/<int:how_many>')
def api_moveout(counter, how_many):
   global cities
   for i in range (0, len(cities) ):
      if counter == cities[i]['Counter']:
         cities[i]['Population'] = cities[i]['Population'] - how_many
         modified_city = cities[i]         
         break

   return modified_city

if __name__ == '__main__':
   app.run(host = '0.0.0.0', debug = True)