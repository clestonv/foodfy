const fs = require('fs') // FileSystem
const data = require('../data.json')

/**
 * Páginas Web
 */
exports.home = function (req, res ) {
    let recipesFiltered = []
    for(let i = 0; i < 6; i++) {
        recipesFiltered.push(data.recipes[i])
    }

    return res.render("home", { items: recipesFiltered })
}
exports.about = function(req, res) {
    return res.render("about")
}
exports.recipes = function(req, res) {
    let recipes = []
    for( let i = 0; i < data.recipes.length; i++ ) {
       const obj = data.recipes[i]
       obj.index = i
    }

    return res.render("recipe", { items: data.recipes })
}
exports.recipe = function (req, res) {
    const { index: recipeIndex } = req.params
    const recipe = data.recipes[recipeIndex]

    return res.render("recipes", { item: recipe})
}
/**
 * Páginas Admin
 */
exports.index = function (req, res) {
    let recipes = []
    for( let i = 0; i < data.recipes.length; i++ ) {
       const obj = data.recipes[i]
       obj.index = i
    }

    return res.render("admin/index", { items: data.recipes })
}
exports.create = function (req, res) {
    return res.render("admin/create")
}
exports.show = function (req, res) {
    // req.params
    const { id } = req.params
    
    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if (!foundRecipe) return res.send("Receita não encontrada")

    return res.render("admin/show" , { recipe: foundRecipe })
}
exports.edit = function (req, res) {
     // req.params
     const { id } = req.params
    
     const foundRecipe = data.recipes.find(function(recipe){
         return recipe.id == id
     })
 
     if (!foundRecipe) return res.send("Receita não encontrada")
     
    return res.render("admin/edit", { recipe: foundRecipe })
}

exports.post = function (req, res ) {
    const keys = Object.keys(req.body)

    for (key of keys ) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!!')
        }
    }

    let { image, title, author, ingredients, preparation, information } = req.body

    const id = Number(data.recipes.length + 1);

    data.recipes.push({
        id,
        image,
        title,
        author,
        ingredients,
        preparation,
        information
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error!!!") 

        return res.redirect("/admin/recipes")
    })
    //return res.send(req.body)
}