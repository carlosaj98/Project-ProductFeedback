const Comment = require("../models/comment")
const Suggestion = require("../models/suggestion")
const Reply = require("../models/reply")
const User = require("../models/user")

const createComment = async (req, res) => {
  const userID = req.user.id
  const reqBody = req.body
  const newComment = {user: userID, ...reqBody}
  const comment = await Comment.create(newComment)

  await Suggestion.findByIdAndUpdate(req.params.suggestionID, {
    $set: { user: req.user.id },
    $push: { comments: comment.id }
  })

  res.json(comment)
}

const createReply = async (req, res) => {
  const userID = req.user.id
  const reqBody = req.body
  const newReply = {user: userID, ...reqBody}
  const reply = await Reply.create(newReply)
  await Comment.findByIdAndUpdate(req.params.commentID, {
    user: req.user.id ,
    $push: { replies: reply.id },
  })

  res.json(reply)
}

module.exports = {
  createComment,
  createReply,
}
