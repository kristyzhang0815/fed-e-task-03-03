import axios from 'axios'

const request = axios.create({
	base: 'https://conduit.productionready.io'
})

export default request
