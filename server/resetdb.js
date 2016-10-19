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
      age_months: 1,
      temperment: 'playful',
      description: 'Katie is a smart dog who loves to play.',
      arrivalDate: '2016-07-12',
      adoptionDate: '2016-09-15',
      photo: 'http://www.dogbreedinfo.com/images15/PaperanianPomPapCross1.jpg',
      ownerId: 2
    },
    {
      petName: 'Chrome Wing',
      commonName: 'bird',
      breed: 'Cockatiel',
      sex: 'female',
      age_years: 1,
      age_months: 1,
      temperment: 'peppy',
      description: 'Chromie likes to sing, a lot... She will sit on your shoulder and nibble your ear.',
      arrivalDate: '2016-07-12',
      adoptionDate: '2016-09-15',
      photo: 'http://www.petcarevision.com/Parrot/Cockatiel-Training.jpg',
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
      address: '1150 Beethoven Common, Unit 300',
      city: 'Fremont',
      state: 'CA',
      zip: 94538,
      photo: 'https://avatars2.githubusercontent.com/u/11937365?v=3&s=466'
    },
    {
      firstName: 'Madhuvanthi',
      lastName: 'Guruprasad',
      phone: '5555555555',
      address: '1234 Some Place',
      city: 'Bay Point',
      state: 'CA',
      zip: 94565,
      photo: null
    }
  ]).toString()

  db.query(clientSql, err => {
    if (err) throw err
  })

  db.end(() => console.log('Database reset.'))
})
