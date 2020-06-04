const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require("./routes/package.route")(app)
require("./routes/users.route")(app)
app.listen(port, () => console.log("listening on Port " + port))