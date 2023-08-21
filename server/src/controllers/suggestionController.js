const Suggestion = require("../models/suggestion")
const Comment = require("../models/comment")
const User = require("../models/user")
const { includes } = require("lodash")

const getAll = async (req, res) => {
  const { category, status, sortByCreation } = req.query

  let filter = {}
  let sort = {
    createdAt: "",
  }

  if (category) {
    filter.category = { $in: category }
  }

  if (status) {
    filter.status = { $in: status }
  }

  if (sortByCreation && ["asc", "desc"].includes(sortByCreation)) {
    sort.createdAt = sortByCreation
  }
  const suggestions = await Suggestion.find(filter)
    .sort(sort)
    .populate({
      path: "comments",
      populate: {
        path: "replies",
      },
    })

  res.json(suggestions)
}

const getOne = async (req, res) => {
  const suggestionID = await Suggestion.findById(
    req.params.suggestionID
  ).populate({
    path: "comments",
    populate: {
      path: "replies",
    },
  })

  if (!suggestionID) return res.status(404).send("The suggestion not exist")

  res.json(suggestionID)
}

const createSuggestion = async (req, res) => {
  const newSuggestion = await Suggestion.create(req.body)
  res.json(newSuggestion)
}

const updateSuggestion = async (req, res) => {
  const updatedSuggestion = await Suggestion.findByIdAndUpdate(
    req.params.suggestionID,
    { $set: req.body },
    { new: true }
  )

  if (!updatedSuggestion)
    return res.status(404).send("The suggestion not exist")

  res.json(updatedSuggestion)
}

const updateVotes = async (req, res) => {
  const suggestion = await Suggestion.findById(req.params.suggestionID)
  if(suggestion.upvotes.includes(req.body.userID)){
    const removeUpvote = await Suggestion.findByIdAndUpdate(
      req.params.suggestionID,
      { $pull: { upvotes: req.body.userID } },
      { new: true }
    )
    res.json(removeUpvote)
  }else{
    const addUpvote = await Suggestion.findByIdAndUpdate(
      req.params.suggestionID,
      { $push: { upvotes: req.body.userID } },
      { new: true }
    )
    res.json(addUpvote)
  }
}

const deleteSuggestion = async (req, res) => {
  const findSuggestion = await Suggestion.findById(
    req.params.suggestionID
  ).populate("comments")

  for (const commentID of findSuggestion.comments) {
    for (const replyID of commentID.replies) {
      await Comment.findByIdAndDelete(replyID)
    }
    await Comment.findByIdAndDelete(commentID)
  }

  const deletedSuggestion = await Suggestion.findByIdAndDelete(
    req.params.suggestionID
  )

  if (!deletedSuggestion)
    return res.status(404).send("The suggestion not exist")

  res.json(deletedSuggestion)
}

module.exports = {
  getAll,
  getOne,
  createSuggestion,
  updateSuggestion,
  updateVotes,
  deleteSuggestion,
}
