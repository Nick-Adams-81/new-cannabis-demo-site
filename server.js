// Dependencies
// ====================================================================

const express = require("express")

const session = require("express-session")

// Setting up our PORT and requiring models for syncing
// ====================================================================

const PORT = process.env.PORT || 4000
const db = require("./models")


// Setting up express app for data parsing
// ====================================================================

const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use.apply(express.json())

// Adding the middleware needed for authentication
// ===================================================================



// Required routes
// ===================================================================
require("./routes/html-routes.js")(app)
require("./routes/api-routes.js")(app)


// Syncing our DB and logging a message for the user upon success
// ===================================================================
// Drop & rebuild tables use { force: true }

db.sequelize.sync()
    .then(function () {
        app.listen(PORT, function () {
            console.log("==> Listening on port %s. Visit http://localhost:%s in your browser", PORT, PORT)
        })
    })

