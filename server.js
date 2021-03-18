const cool = require('cool-ascii-faces');
const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');
const routes = require('./routes');
const server = express();
const PORT = process.env.PORT || 5000

server.set("view engine","njk");

server.use(express.urlencoded( { extended: true } ))
server.use(express.static('src'))
server.use(methodOverride('_method'))
server.use(routes)

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.listen(PORT, function() {
    console.log('Server is running')
})