const { Router } = require('express')
const getPrice = require('../controllers/getPrice')

const getPriceRouter = Router()

getPriceRouter.get('/hive', async(req, res) => {
	const PRICE = await getPrice('hive')

	res.send(JSON.stringify(PRICE))
})
getPriceRouter.get('/hbd', async(req, res) => {
	const PRICE = await getPrice('hbd')

	res.send(JSON.stringify(PRICE))
})

module.exports = getPriceRouter