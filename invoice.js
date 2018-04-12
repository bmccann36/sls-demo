

const dynamoDbLib = require('./libs/dynamodb-lib');
const { success, failure } = require('./libs/response-lib');


// query string req format
// ACCT_NUM=myAcct&REVENUE_MTH=myMth&REVENUE_YR=someYrr

exports.main = function main(event, context, callback) {

  const params = event.queryStringParameters

  // callback(null, params)
  callback(null, success(params))

}



