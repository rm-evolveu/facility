import json

# def lambda_handler(event, context):
#     # TODO implement
#     return {
#         'statusCode': 200,
#         'body': json.dumps('Hello from Lambda!')
#     }

import random

def lambda_handler(event, context):
   randomCities = [
      'Madrid', 'Hamburg', 'Rome', 'Kaoshiung',
      'Brisbane', 'Shantou', 'Warsaw', 'Hangzhou',
      'Fortaleza', 'Chengdu', 'Kwangju', 'Kano',
      'Houston', 'Casablanca', 'Fukuoka', 'Hanoi',
      'Karachi', 'Dhaka', 'Beijing', 'Saigon'
   ]

   return {
      'statusCode': 200,
      'body': json.dumps({ 'Name': random.choice(randomCities) })
   }
