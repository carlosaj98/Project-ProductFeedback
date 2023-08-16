const express = require('express')
const { body } = require('express-validator')
const validationReq = require("../middlewares/validationReq")

const bodyValidationSchema = [
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
const UserControllers = require('../controllers/usersController')

const router = express.Router()

router.post(
	'/signup',
	bodyValidationSchema,
	validationReq,
	UserControllers.register
)
router.post(
	'/signin',
	UserControllers.login
)

module.exports = router