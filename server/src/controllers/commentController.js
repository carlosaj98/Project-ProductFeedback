const Comment = require("../models/comment")
const Suggestion = require("../models/suggestion")
const Reply = require("../models/reply")
const User = require("../models/user")

const createComment = async (req, res) => {
  const newComment = req.body
  const comment = await Comment.create(newComment)

  await Suggestion.findByIdAndUpdate(req.params.suggestionID, {
    $push: { comments: comment.id },
  })

  res.json(comment)
}

const createReply = async (req, res) => {
  const newReply = req.body
  const reply = await Reply.create(newReply)
  await Comment.findByIdAndUpdate(req.params.commentID, {
    $push: { replies: reply.id },
  })

  res.json(reply)

}

module.exports = {
  createComment,
  createReply,
}
