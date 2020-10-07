const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const recipes = require("./data")
const PORT = process.env.PORT || 5000

server.set("view engine","html")

server.use(express.static('src'))

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.get("/", function(req, res) {

    let recipesFiltered = []

    for(let i = 0; i < 6; i++) {
        recipesFiltered.push(recipes[i])
    }

    return res.render("home", { items: recipesFiltered })
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.get("/recipe", function(req, res) {

    let recipesFiltered = []

    for( let i = 0; i < recipes.length; i++ ) {
       const obj = recipes[i]
       obj.index = i
   
    }


    return res.render("recipe", { items: recipes })
})

server.get("/recipes/:index", function (req, res) {
    const { index: recipeIndex } = req.params

    const recipe = recipes[recipeIndex]

    return res.render("recipes", { item: recipe})
  })



server.listen(PORT, function() {
    console.log('Server is running')
})