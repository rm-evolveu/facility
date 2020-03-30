import json

# def lambda_handler(event, context):
    # TODO implement
    # return {
        # 'statusCode': 200,
        # 'body': json.dumps('Hello from Lambda!')
    # }

import boto3


# helper for decimal
import decimal
def replace_decimals(obj):
    if isinstance(obj, list):
        for i in range(len(obj)):
            obj[i] = replace_decimals(obj[i])
        return obj
    elif isinstance(obj, dict):
        for k in obj.keys():
            obj[k] = replace_decimals(obj[k])
        return obj
    elif isinstance(obj, decimal.Decimal):
        if obj % 1 == 0:
            return int(obj)
        else:
            return float(obj)
    else:
        return obj


# main function
def lambda_handler(event, context):
   try:
      dynamodb = boto3.resource('dynamodb', region_name='ca-central-1')
      table = dynamodb.Table('cities')
      resp = replace_decimals(table.scan())
      response = {'Cities': resp['Items'], 'Status': 0 }
   except Exception as e:
      response = {'Status': -1, 'Message': str(e) }
   return {
        'statusCode': 200,
        'body': json.dumps(response)
    }