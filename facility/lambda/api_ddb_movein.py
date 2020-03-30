import json

# def lambda_handler(event, context):
#     # TODO implement
#     return {
#         'statusCode': 200,
#         'body': json.dumps('Hello from Lambda!')
#     }

import boto3

def lambda_handler(event, context):
   try:
      counter = event['pathParameters']['counter']
      how_many = int(event['pathParameters']['how_many'])
      
      dynamodb = boto3.resource('dynamodb', region_name='ca-central-1')
      table = dynamodb.Table('cities')
      city = table.get_item(Key={"Counter": counter})
      current_population = city['Item']['Population']
      new_population = current_population + how_many
      table.update_item(
         Key={"Counter": counter},
         UpdateExpression="set Population = :p",
         ExpressionAttributeValues={ ':p': new_population} 
      )
      response = {'Status': 0 }
   except Exception as e:
      response = {'Status': -1, 'Message': str(e) }

   return {
        'statusCode': 200,
        'body': json.dumps(response)
   }
