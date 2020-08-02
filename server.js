const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set("view engine","html")

server.use(express.static('src'))

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("home")
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.get("/recipe", function(req, res) {
    return res.render("recipe")
})



server.listen(5000, function() {
    console.log('Server is running')
})

