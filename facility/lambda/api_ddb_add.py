import json

# def lambda_handler(event, context):
#     # TODO implement
#     return {
#         'statusCode': 200,
#         'body': json.dumps('Hello from Lambda!')
#     }

import uuid
import decimal
import boto3

def lambda_handler(event, context):
   try:
      dynamodb = boto3.resource('dynamodb', region_name='ca-central-1')
      table = dynamodb.Table('cities')

      table.put_item(Item={"Counter": str(uuid.uuid4()), "Name": event['pathParameters']['name'],
      "Population": int(event['pathParameters']['population']), "Longitude": decimal.Decimal(event['pathParameters']['longitude']), "Latitude": decimal.Decimal(event['pathParameters']['latitude']) })

      response = {'Status': 0 }

   except Exception as e:
      response = {'Status': -1, 'Message': str(e) }

   return {
        'statusCode': 200,
        'body': json.dumps(response)
   }
