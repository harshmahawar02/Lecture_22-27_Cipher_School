var http = require('http');

let server = http.createServer((reuqest, response) => {
    response.end("hello world")
})
server.listen(5500, 'localhost', () => {
    console.log("started the server on port 5000")
})