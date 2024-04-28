const express = require('express')
const app = express()
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT

app.use(express.json(), express.urlencoded({ extended: true }), cors())

require("./configs/mongoose.config")

require('./routes/author.routes')(app)

app.listen(port, () => {
    console.log("listening to port " + port);
});