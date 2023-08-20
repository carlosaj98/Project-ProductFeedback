const Suggestion = require("../models/suggestion")
const Comment = require("../models/comment")

const getAll = async (req, res) => {
  console.log(req.query)
  // const {filterByCategory, sortByCreation} = req.query

  // let filter = {}
  // let sort = {}

  // if(filterByCategory){
  //   filter.category = { $in: filterByCategory}
  // }
  
  // if(sortByCreation && ["asc","desc"].includes(sortByCreation)){
  //   sort.createdAt = sortByCreation
  // }
  const suggestions = await Suggestion.populate({
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

const deleteSuggestion = async (req, res) => {
  const findSuggestion = await Suggestion.findById(req.params.suggestionID).populate("comments")
  
  for (const commentID of findSuggestion.comments) {
    for(const replyID of commentID.replies){
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
  deleteSuggestion,
}
