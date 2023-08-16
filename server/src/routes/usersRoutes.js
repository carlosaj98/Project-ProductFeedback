const express = require('express')

const UserControllers = require('../controllers/usersController')

const router = express.Router()

router.post(
	'/signup',
	UserControllers.register
)
router.post(
	'/signin',
	UserControllers.login
)

module.exports = router