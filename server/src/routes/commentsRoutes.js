const express = require('express')

const router = express.Router()

const CommentControllers = require('../controllers/commentController')

router.post(
	'/:suggestionID/comments',
	CommentControllers.createComment
)

router.put(
	'/comments/:commentID',
	CommentControllers.createReply
)

module.exports = router