const mongoose = require("mongoose")

const { ObjectID } = mongoose.Schema.Types

const suggestionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ["UI", "UX", "Enhancement", "Bug", "Feature"],
      required: true,
    },
    upvotes: [{ type: ObjectID, ref: "User" }],
    status: {
      type: String,
      enum: ["Planned", "In-Progress", "Live"],
      required: true,
    },
    comments: [{ type: ObjectID, ref: "Comment" }],
  },
  { timestamps: true }
)

const Suggestion = mongoose.model("Suggestion", suggestionSchema)

module.exports = Suggestion
