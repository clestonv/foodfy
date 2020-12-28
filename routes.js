const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')

routes.get('/', recipes.home )
routes.get("/about", recipes.about )
routes.get("/recipe", recipes.recipes )
routes.get("/recipes/:index", recipes.food )


routes.get("/admin/recipes", recipes.index )
routes.get("/admin/recipes/create", recipes.create )
routes.get("/admin/recipes/:id", recipes.show )
routes.get("/admin/recipes/:id/edit", recipes.edit )

module.exports = routes