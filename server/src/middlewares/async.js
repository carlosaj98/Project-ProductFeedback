module.exports = function (endpointMiddleware) {
	return async (req, res, next) => {
		try {
			await endpointMiddleware(req, res)
		} catch (err) {
			next(err)
		}
	}
}