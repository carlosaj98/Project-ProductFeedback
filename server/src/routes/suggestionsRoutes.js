const express = require('express')
// const { param, body } = require('express-validator')
// const validate = require('../middlewares/validate')
// const isAuth = require('../middlewares/isAuth')
// const isAdmin = require('../middlewares/isAdmin')

// const categoryValidationSchema = [
// 	body('title')
// 		.notEmpty()
// 		.withMessage('El título no puede estar vacío')
// 		.isString()
// 		.withMessage('Debe proporcionar un título de texto'),
// ]

// const idValidationSchema = param('id')
// 	.isMongoId()
// 	.withMessage('Id invalida')

const SuggestionControllers = require("../controllers/suggestionController")

const router = express.Router()

router.get('/', SuggestionControllers.getAll)

router.get('/:suggestionID', SuggestionControllers.getOne)

router.post(
	'/',
	SuggestionControllers.createSuggestion
)

router.put(
	'/:suggestionID',
	SuggestionControllers.updateSuggestion
)

router.put(
	'/:suggestionID/votes',
	SuggestionControllers.updateVotes
)

router.delete(
	'/:suggestionID',
	SuggestionControllers.deleteSuggestion
)

module.exports = router