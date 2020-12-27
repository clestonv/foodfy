const cool = require('cool-ascii-faces')
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const server = express()
const PORT = process.env.PORT || 5000

server.set("view engine","html")

server.use(express.static('src'))
server.use(routes)

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.listen(PORT, function() {
    console.log('Server is running')
})