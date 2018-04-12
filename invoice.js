

const dynamoDbLib = require('./libs/dynamodb-lib');
const { success, failure } = require('./libs/response-lib');


exports.main = function main(event, context, callback) {
  // const ACCT_NUM = event.queryStringParameters.ACCT_NUM
  // const params = {
  //   TableName: 'customer',
  //   Key: {
  //     ACCT_NUM: ACCT_NUM,
  //   }
  // };

  dynamoDbLib('get', params)
    .then(res => {
      callback(null, success(res));
    })
    .catch(err => {
      console.log(err)
      callback(null, failure({ status: false }));
    })
}
