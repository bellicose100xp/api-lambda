let AWS = require('aws-sdk')
const _id = require('shortid')
AWS.config.region = 'us-west-2'

// start commemt out for production
let event = require('./event')
let callback = (err, success) => err ? console.log(err) : console.log(success);
// end comment out for production

// change it to "exports.handler"
let handler = (event, context, callback) => {
    let dynamodb = new AWS.DynamoDB()
    let tableName = 'test-lambda-table'
    let body = JSON.parse(event.body)
    let paramsPutItem = {
        Item: {
            "Id": {
                S: `${_id()}`
            },
            "Message": {
                S: `${body.Message}`
            }
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: tableName
    }

    putItemPromise = dynamodb.putItem(paramsPutItem).promise()

    putItemPromise.then(data => {
        console.log(data)

        //success response code
        let responseCode = {
            "statusCode": 200,
            "body": "message: item uploaded"
        }
        callback(null, responseCode);
    }, err => console.log(err, err.stack))

}

// start commemt out for production
handler(event, null, callback)
// end commemt out for production