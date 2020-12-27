const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')

routes.get('/', recipes.home )

routes.get("/about", function(req, res) {
    return res.render("about")
})

routes.get("/recipe", function(req, res) {

    let recipesFiltered = []

    for( let i = 0; i < recipes.length; i++ ) {
       const obj = recipes[i]
       obj.index = i
   
    }


    return res.render("recipe", { items: recipes })
})

routes.get("/recipes/:index", function (req, res) {
    const { index: recipeIndex } = req.params

    const recipe = recipes[recipeIndex]

    return res.render("recipes", { item: recipe})
  })

routes.get('/cool', (req, res) => res.send(cool()))

module.exports = routes