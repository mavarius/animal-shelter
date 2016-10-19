// REQUIRES
const express = require('express')
const router = express.Router()

const Animals = require('../models/Animals')

// OWNER ID SPECIFIC ROUTES
router.route('/owner/:id')
  .get((req, res) => {
    Animals.findByOwner(req.params.id)
      .then(animals => {
        res.send(animals)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })

// ID SPECIFIC ROUTES
router.route('/:id')
  .get((req, res) => {
    Animals.findById(req.params.id)
      .then(animals => {
        res.send(animals)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })

  .put((req, res) => {
    Animals.update(req.params.id, req.body)
      .then(Animals.findAll)
      .then(animals => {
        res.send(animals)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })

  .delete((req, res) => {
    Animals.removeById(req.params.id)
      .then(Animals.findAll)
      .then(animals => {
        res.send(animals)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })

// GENERAL ANIMAL ROUTES
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
