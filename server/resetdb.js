// REQUIRES
require('dotenv').config()

const db = require('./config/db')
const squel = require('squel')

// DROP CURRENT TABLES
db.query('drop table Animals')

db.query('drop table Clients', err => {
  if (err) throw err

  // RECREATE TABLES WITH NEW SCHEMA
  require('./models/Animals')
  require('./models/Clients')

  // INSERT SAMPLE ANIMAL DATA
  let animalSql = squel.insert().into('Animals').setFieldsRows([
    {
      petName: 'Katie Ledecky',
      commonName: 'dog',
      breed: 'Paperanian',
      sex: 'female',
      age_years: 2,
      ownerId: 1
    }
  ]).toString()

  db.query(animalSql, err => {
    if (err) throw err
  })

  // INSERT SAMPLE CLIENT DATA
  let clientSql = squel.insert().into('Clients').setFieldsRows([
    {
      firstName: 'Daniel',
      lastName: 'Campbell',
      phone: '2695190057',
      address: '1140 Chopin Terrace, Unit 306',
      city: 'Fremont',
      state: 'CA',
      zip: 94538
    }
  ]).toString()

  db.query(clientSql, err => {
    if (err) throw err
  })

  db.end(() => console.log('Database reset.'))
})
