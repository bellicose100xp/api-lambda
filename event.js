module.exports = {
    httpMethod: "POST",
    body: JSON.stringify({
        Message: `${(new Date()).toString()}`
    })
}