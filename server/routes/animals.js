// REQUIRES
const express = require('express')
const router = express.Router()

const Animals = require('../models/Animals')

// ROUTES
router.route('/')
  .get((req, res) => {
    Animals.findAll()
      .then(animals => {
        res.send(animals)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })

  .post((req, res) => {
    Animals.create(req.body)
      .then(Animals.findAll)
      .then(animals => {
        res.send(animals)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })

// EXPORT
module.exports = router
