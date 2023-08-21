require ("dotenv").config()
const express = require('express')

const app = express()

require('./startup/config')()
require('./startup/bd')()
require('./startup/routes')(app)

app.listen(9000, ()=> console.log("SERVER ON ..."))