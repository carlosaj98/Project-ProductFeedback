const express = require('express')
const { body } = require('express-validator')
const validationReq = require("../middlewares/validationReq")

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

const router = express.Router()

router.post(
	'/signup',
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