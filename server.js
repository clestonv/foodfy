const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set("view engine","html")

server.use(express.static('public'))
server.use(express.static('src'))

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.listen(5000, function() {
    console.log('Server is running')
})

server.get("/", function(req, res) {
    return res.render("index")
})