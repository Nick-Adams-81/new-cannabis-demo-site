// Requiring path so we can use relative routes to our HTML files
const path = require("path")

module.exports = function(app) {
    // Rote to our homepage
    app.get("/", function( req, res) {
        res.render(path.join(__dirname, "../views/index.html"))
    })
}