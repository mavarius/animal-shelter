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
  age_months INT,
  temperment VARCHAR(100),
  description VARCHAR(300),
  ownerId INT DEFAULT '0',
  arrivalDate DATE,
  adoptionDate DATE,
  photo LONGTEXT,
  PRIMARY KEY (id)
)`, err => {
  if (err) throw err
})

// RETRIEVE ALL ENTRIES
exports.findAll = () => new Promise((resolve, reject) => {
  let sql = squel.select()
                 .from(TABLE_NAME)
                 .field('Animals.*')
                 .field('Clients.firstName', 'ownerFirstName')
                 .field('Clients.lastName', 'ownerLastName')
                 .left_join('Clients', null, 'Animals.ownerId = Clients.id')
                 .toString()

  db.query(sql, (err, animals) => {
    if (err) return reject(err)
    resolve(animals)
  })
})

// RETRIEVE ENTRY BY ID
exports.findById = (searchId) => new Promise((resolve, reject) => {
  let sql = squel.select()
                 .from(TABLE_NAME)
                 .field('Animals.*')
                 .field('Clients.firstName', 'ownerFirstName')
                 .field('Clients.lastName', 'ownerLastName')
                 .left_join('Clients', null, 'Animals.ownerId = Clients.id')
                 .where(`Animals.id = ${searchId}`)
                 .toString()

  db.query(sql, (err, animals) => {
    if (err) return reject(err)
    resolve(animals)
  })
})

// RETRIEVE ENTRIES BY OWNER
exports.findByOwner = (searchId) => new Promise((resolve, reject) => {
  let sql = squel.select()
                 .from(TABLE_NAME)
                 .field('Animals.*')
                 .field('Clients.firstName', 'ownerFirstName')
                 .field('Clients.lastName', 'ownerLastName')
                 .join('Clients', null, 'Animals.ownerId = Clients.id')
                 .where(`Animals.ownerId = ${searchId}`)
                 .toString()

  db.query(sql, (err, animals) => {
    if (err) return reject(err)
    resolve(animals)
  })
})

// RETRIEVE HOMELESS ENTRIES
exports.findHomeless = (searchId) => new Promise((resolve, reject) => {
  let sql = squel.select()
                 .from(TABLE_NAME)
                 .field('Animals.*')
                 .where(`Animals.ownerId = ${false}`)
                 .toString()

  db.query(sql, (err, animals) => {
    if (err) return reject(err)
    resolve(animals)
  })
})

// CREATE NEW ENTRY
exports.create = (animal) => new Promise((resolve, reject) => {
  let sql = squel.insert().into(TABLE_NAME).setFields(animal).toString()

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
                 .where(`Animals.id = ${deleteId}`)
                 .toString()

  db.query(sql, (err, result) => {
    if (err) return reject(err)
    resolve(result)
  })
})
