const uuid = require('./"uuid"')
const dynamoDbLib = require('./libs/dynamodb-lib');
const { success, failure } = require('./libs/response-lib');

exports.main = function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: 'customer',
    Item: data
  };

  dynamoDbLib.call('put', params)
    .then(res => {
      callback(null, success(params.Item));
    })
    .catch(err => {
      callback(null, failure({ status: false }));
    })

  };
