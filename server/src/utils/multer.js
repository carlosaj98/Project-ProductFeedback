const multer = require('multer')

const storage = require('./multer.cloudinaryStorage')

module.exports = (validateType) =>
	multer({
		storage,
		fileFilter: function (req, file, cb) {
			if (validateType(file.mimetype)) return cb(null, true)

			cb(null, false)
		},
	})