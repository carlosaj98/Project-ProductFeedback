const { validationResult } = require('express-validator')
const cloudinary = require('../utils/cloudinary')

module.exports = async (req, res, next) => {
	const { errors } = validationResult(req)

	if (errors.length) {

		if (req.file) {
			await cloudinary.uploader.destroy(req.file.filename, {invalidate: true})
		}

		const errorMessages = errors.map((error) => ({
			field: error.path,
			msg: error.msg,
		}))
		return res.status(400).json(errorMessages)
	}

	next()
}