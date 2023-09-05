const express = require("express")
const { param, body } = require("express-validator")
const validate = require("../middlewares/validationReq")
const isAuth = require("../middlewares/isAuth")
const isAdmin = require("../middlewares/isAdmin")

const options = {
  category: ["UI", "UX", "Enhancement", "Bug", "Feature"],
  status: ["Planned", "In-Progress", "Live"],
}

const suggestionValidationSchema = [
  body("title")
    .notEmpty()
    .withMessage("The title is required")
    .isString()
    .withMessage("The title has to be words"),
  body("category")
    .notEmpty()
    .withMessage("The category is required")
    .isIn(options.category)
    .withMessage("The category not exist"),
  body("status")
    .notEmpty()
    .withMessage("The status is required")
    .isIn(options.status)
    .withMessage("The status not exist"),
]

const idValidationSchema = param("suggestionID")
  .isMongoId()
  .withMessage("Invalid Suggestion ID")

const SuggestionControllers = require("../controllers/suggestionController")

const router = express.Router()

router.get("/", SuggestionControllers.getAll)

router.get(
  "/:suggestionID",
  idValidationSchema,
  validate,
  SuggestionControllers.getOne
)

router.post(
  "/",
  isAuth,
  suggestionValidationSchema,
  validate,
  SuggestionControllers.createSuggestion
)

router.put(
  "/:suggestionID",
  isAuth,
	idValidationSchema,
  suggestionValidationSchema,
  validate,
  SuggestionControllers.updateSuggestion
)

router.put(
  "/:suggestionID/votes",
  isAuth,
	idValidationSchema,
  validate,
  SuggestionControllers.updateVotes
)

router.delete(
  "/:suggestionID",
  isAuth,
  isAdmin,
	idValidationSchema,
  validate,
  SuggestionControllers.deleteSuggestion
)

module.exports = router
