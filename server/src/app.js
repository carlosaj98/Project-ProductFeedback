require("dotenv").config()
const express = require("express")

const app = express()
const port = process.env.PORT || 9000

require("./startup/config")()
require("./startup/bd")()
require("./startup/routes")(app)

app.get("/ping", (req, res) => res.send("pong"))

app.listen(port, () => console.log("SERVER ON PORT... " + port))
