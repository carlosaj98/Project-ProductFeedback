module.exports = function (err, req, res, next) {
	// Aquí lógica para errores 500

	// console.log(err)
	res.status(500).send('We are working to return as soon as possible.')
}