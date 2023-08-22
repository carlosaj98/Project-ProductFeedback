const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
	const token = req.headers['x-auth-token']

	if (!token) return res.status(401).send('Token does not exist')

	try {
		const decoded = jwt.verify(token, process.env.jwtPrivateKey)
		req.user = decoded

		next()
	} catch (err) {
		return res.status(400).send('Invalid Token')
	}
}