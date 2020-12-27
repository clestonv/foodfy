const recipes = require('../data.json')

//home 
exports.home = function (req, res ) {
    let recipesFiltered = []
    for(let i = 0; i < 6; i++) {
        recipesFiltered.push(recipes[i])
    }

    return res.render("home", { items: recipesFiltered })
}