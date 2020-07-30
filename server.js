const express = require('express')

const server = express()

server.listen(5000, function() {
    console.log('Server is running')
})

server.get("/", function(req, res) {
    return res.send("Nodemon !!")
})