const http = require('http')

const server = http.createServer((req, res) => {
    console.log('you found the server')
    res.end('home page')
})

server.listen(5000)