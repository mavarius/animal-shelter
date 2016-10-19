// LOAD ENVIRONMENT VARIABLES
require('dotenv').config()

// SET SERVER PORT
const PORT = process.env.PORT || 8000

// REQUIRES
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../webpack.config')

// APP DECLARATION
const app = express()

// GENERAL MIDDLEWARE
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.static('src'))

// WEBPACK CONFIGURATION
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath, noInfo: true }))
app.use(webpackHotMiddleware(compiler))

// ROUTES
app.use('/api', require('./routes/api'))
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

// SERVER LISTEN
app.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`)
})
