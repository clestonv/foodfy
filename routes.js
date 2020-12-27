const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')

routes.get('/', recipes.home )

routes.get("/about", recipes.about )

routes.get("/recipe", recipes.recipes )

routes.get("/recipes/:index", recipes.food )

module.exports = routes