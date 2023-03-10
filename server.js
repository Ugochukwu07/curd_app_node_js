const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')

const connctDB = require('./server/database/connection')
const { connect } = require('http2')

const app = express()

dotenv.config({path: '.env'})
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'))

//mongoDB comnnection
connctDB()

//parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}))

//set view engine
app.set("view engine", 'ejs')
// app.set("views", path.resolve(__dirname, "path-to-ejs-files"))   when ejs files are not in views

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//load routers
app.use('/', require("./server/routes/router"))

app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`)
})