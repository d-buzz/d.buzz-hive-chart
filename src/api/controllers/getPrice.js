const axios = require('axios')

const getPrice = async() => {
	const price =  await axios.get('https://pro-api.coinmarketcap.com/v2/tools/price-conversion?amount=1&symbol=hive&CMC_PRO_API_KEY=b6eb82c3-50d7-4c40-b791-72bf00df572c')

	return price.data
}

module.exports = getPrice