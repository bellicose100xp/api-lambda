exports.handler = (event, context, callback) => {
    // TODO implement
    console.log(event.httpMethod)
    console.log(event.body);
    console.log("test-console");
    
    let responseCode = {
    "statusCode": 200
    }
    
    callback(null, responseCode);
};