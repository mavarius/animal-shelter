// REQUIRES
const express = require('express')
const router = express.Router()

const Clients = require('../models/Clients')

// ROUTES
router.route('/')
  .get((req, res) => {
    Clients.findAll()
      .then(clients => {
        res.send(clients)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })

  .post((req, res) => {
    Clients.create(req.body)
      .then(Clients.findAll)
      .then(clients => {
        res.send(clients)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })

// EXPORT
module.exports = router
