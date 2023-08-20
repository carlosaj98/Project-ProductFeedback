const mongoose = require("mongoose")

const { ObjectId } = mongoose.Schema.Types

const replySchema = new mongoose.Schema({
  user:{type: ObjectId, ref: "User", required: true},
  content: {type: String, required: true},
})

const Reply = mongoose.model("Reply", replySchema)

module.exports = Reply