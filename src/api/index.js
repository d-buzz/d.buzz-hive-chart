const express = require('express')
const getPriceRouter = require('./routes/getPriceRouter')
const api = express()

api.use('/price', getPriceRouter)

module.exports = api