// REQUIRES
const db = require('../config/db')
const squel = require('squel')

// TABLE NAME
const TABLE_NAME = 'Clients'

// SCHEMA
db.query(`CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  phone VARCHAR(10),
  address VARCHAR(60),
  city VARCHAR(60),
  state VARCHAR(2),
  zip INT,
  photo LONGTEXT,
  PRIMARY KEY (id)
)`, err => {
  if (err) throw err
})

// RETRIEVE ALL ENTRIES
exports.findAll = () => new Promise((resolve, reject) => {
  db.query(`SELECT * FROM ${TABLE_NAME}`, (err, clients) => {
    if (err) return reject(err)
    resolve(clients)
  })
})

// RETRIEVE ENTRY BY ID
exports.findById = (searchId) => new Promise((resolve, reject) => {
  let sql = squel.select()
                 .from(TABLE_NAME)
                 .field('Clients.*')
                 .where(`Clients.id = ${searchId}`)
                 .toString()

  db.query(sql, (err, clients) => {
    if (err) return reject(err)
    resolve(clients)
  })
})

// CREATE NEW ENTRY
exports.create = (client) => new Promise((resolve, reject) => {
  let sql = squel.insert().into(TABLE_NAME).setFields(client).toString()

  db.query(sql, (err, result) => {
    if (err) return reject(err)
    resolve(result)
  })
})

// UPDATE EXISTING ENTRY
exports.update = (id, updateObj) => new Promise((resolve, reject) => {
  let sql = squel.update().table(TABLE_NAME).setFields(updateObj).where(`id = ${id}`).toString()

  db.query(sql, (err, result) => {
    if (err) return reject(err)
    resolve(result)
  })
})

// DELETE ENTRY
exports.removeById = (deleteId) => new Promise((resolve, reject) => {
  let sql = squel.delete()
                 .from(TABLE_NAME)
                 .where(`Clients.id = ${deleteId}`)
                 .toString()

  db.query(sql, (err, result) => {
    if (err) return reject(err)
    resolve(result)
  })
})
