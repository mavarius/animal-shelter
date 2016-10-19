// REQUIRES
const db = require('../config/db')
const squel = require('squel')

// TABLE NAME
const TABLE_NAME = 'Animals'

// SCHEMA
db.query(`CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
  id INT NOT NULL AUTO_INCREMENT,
  petName VARCHAR(100),
  commonName VARCHAR(60),
  breed VARCHAR(60),
  sex VARCHAR(10),
  age_years INT,
  owner INT,
  photo LONGTEXT,
  PRIMARY KEY (id)
)`, err => {
  if (err) throw err
})

// RETRIEVE ALL ENTRIES
exports.findAll = () => new Promise((resolve, reject) => {
  db.query(`SELECT * FROM ${TABLE_NAME}`, (err, animals) => {
    if (err) return reject(err)
    resolve(animals)
  })
})

// CREATE NEW ENTRY
exports.create = (animal) => {
  return new Promise((resolve, reject) => {
    let sql = squel.insert().into(TABLE_NAME).setFields(animal).toString()

    db.query(sql, (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}
