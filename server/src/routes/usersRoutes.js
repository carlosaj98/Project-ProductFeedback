const express = require('express')
const { body } = require('express-validator')
const validationReq = require("../middlewares/validationReq")
const { pick } = require('lodash')
const createUploader = require('../utils/multer')


const AVATAR_TYPES = {
	'image/jpeg': 'jpg',
	'image/png': 'png',
}

const validateAvatar = (type) => AVATAR_TYPES[type]

const registerValidationSchema = [
	body('firstname')
	.notEmpty()
	.withMessage('Your firstname is required')
	.isString()
	.withMessage('Your firstname have to be one or more words'),

	body('lastname')
	.notEmpty()
	.withMessage('Your lastname is required')
	.isString()
	.withMessage('Your lastname have to be one or more words'),

	body('avatar')
	.custom((_, { req }) => req.file)
	.withMessage('El avatar es obligatorio')
	.custom((_, { req }) => validateAvatar(req.file.mimetype))
	.withMessage(
		'El avatar debe estar en uno de los formatos permitidos ' +
			Object.values(AVATAR_TYPES).join('/')
	),
]

const loginValidationSchema = [
	body('username')
		.notEmpty()
		.withMessage('Your username is required'),
	body('password')
		.notEmpty()
		.withMessage('Your password is required'),
]
const UserControllers = require('../controllers/usersController')
const upload = createUploader(validateAvatar)

const router = express.Router()

router.post(
	'/signup',
	upload.single("avatar"),
	registerValidationSchema,
	validationReq,
	UserControllers.register
)
router.post(
	'/signin',
	loginValidationSchema,
	validationReq,
	UserControllers.login
)

module.exports = router