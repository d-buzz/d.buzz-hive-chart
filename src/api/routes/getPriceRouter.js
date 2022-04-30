const { Router } = require('express')
const getPrice = require('../controllers/getPrice')

const getPriceRouter = Router()

getPriceRouter.get('/getPrice', async(req, res) => {
	const HIVE_PRICE = await getPrice()

	res.send(JSON.stringify(HIVE_PRICE))
})

module.exports = getPriceRouter