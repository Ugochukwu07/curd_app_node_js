const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config({path: 'config.env'})

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

connection.connect()

connection.query('SELECT * FROM users LIMIT 1', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].password)
})

connection.end()