import { success, failure } from '../utils/response'
import * as dynamodb from '../utils/dynamodb'

export async function main(event) {
  const params = {
    TableName: process.env.transactionsTable,
    KeyConditionExpression: 'customerId = :customerId',
    ExpressionAttributeValues: {
      ':customerId': event.requestContext.identity.cognitoIdentityId
    }
  }

  try {
    const result = await dynamodb.call('query', params)
    return success(result.Items)
  } catch (e) {
    return failure({ status: false })
  }
}
