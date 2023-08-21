const mongoose = require("mongoose")

const { ObjectId } = mongoose.Schema.Types

const commentSchema = new mongoose.Schema({
  user:{type: ObjectId, ref: "User"},
  content: {type: String, required: true},
  replies:[{type: ObjectId, ref: "Reply"}]
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment