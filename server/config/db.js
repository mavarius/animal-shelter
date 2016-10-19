// REQUIRES
const mysql = require('mysql')

const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD } = process.env

// CREATE CONNECTION
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
})

// CONNECT
db.connect()

// EXPORT
module.exports = db
