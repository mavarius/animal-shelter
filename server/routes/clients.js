// REQUIRES
const express = require('express')
const router = express.Router()

const Clients = require('../models/Clients')

// ID SPECIFIC CLIENT ROUTES
router.route('/:id')
  .get((req, res) => {
    Clients.findById(req.params.id, req.body)
      .then(clients => {
        res.send(clients)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })

  .put((req, res) => {
    Clients.update(req.params.id, req.body)
      .then(Clients.findAll)
      .then(clients => {
        res.send(clients)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })

  .delete((req, res) => {
    Clients.removeById(req.params.id, req.body)
      .then(Clients.findAll)
      .then(clients => {
        res.send(clients)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })

// GENERAL CLIENT ROUTES
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
