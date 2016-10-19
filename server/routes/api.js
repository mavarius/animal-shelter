// REQUIRES
const express = require('express')
const router = express.Router()

// ROUTES
router.use('/animals', require('./animals'))
router.use('/clients', require('./clients'))

// EXPORT
module.exports = router
