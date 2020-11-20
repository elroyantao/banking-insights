import generateTransactions from '../libs/generate-transaction'
import { success, failure } from '../utils/response'
import * as dynamodb from '../utils/dynamodb'

export async function main (event) {
  const customerId = event.requestContext.identity.cognitoIdentityId
  const transction = generateTransactions(customerId)

  const params = {
    TableName: process.env.transactionsTable,
    Item: transction
  }

  try {
    await dynamodb.call('put', params)
    return success(params.Item)
  } catch (e) {
    return failure({ status: false, e, transction })
  }
}