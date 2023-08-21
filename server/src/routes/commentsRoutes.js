const express = require("express")
const { param, body } = require("express-validator")
const validate = require("../middlewares/validationReq")
const isAuth = require("../middlewares/isAuth")
const isAdmin = require("../middlewares/isAdmin")

const commentValidationSchema = [
  body("content")
    .notEmpty()
    .withMessage("The content have to be 250 letters or less")
    .isString()
    .withMessage("The content have to be words"),
]

const idValidationSchema = param("suggestionID", "commentID")
  .isMongoId()
  .withMessage("Invalid ID")

const router = express.Router()

const CommentControllers = require("../controllers/commentController")

router.post(
  "/:suggestionID/comments",
  isAuth,
  idValidationSchema,
  commentValidationSchema,
  validate,
  CommentControllers.createComment
)

router.put(
  "/comments/:commentID",
  isAuth,
  idValidationSchema,
  commentValidationSchema,
  validate,
  CommentControllers.createReply
)

module.exports = router
