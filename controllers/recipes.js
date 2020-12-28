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
exports.food = function (req, res) {
    const { index: recipeIndex } = req.params

    const recipe = data.recipes[recipeIndex]

    return res.render("recipes", { item: recipe})
}
/**
 * Páginas Admin
 */
exports.index = function (req, res) {
    return res.render("index")
}
exports.create = function (req, res) {
    return res.send('Create')
}
exports.show = function (req, res) {
    return res.send('Show')
}
exports.edit = function (req, res) {
    return res.send('Edit')
}