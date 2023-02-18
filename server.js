const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Curd Application')
})

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})