const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('./cloudinary')
const { v4: uuidv4 } = require('uuid')
const path = require('path')

module.exports = new CloudinaryStorage({
	cloudinary,
	params: {
		folder: 'users',
		format: async (req, file) => path.extname(file.originalname).substring(1),
		public_id: (req, file) => uuidv4(),
	},
})