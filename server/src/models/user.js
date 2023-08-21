const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  avatar: {type: String, required: true},
  avatarCloudinaryId: { type: String, required: true },
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  isAdmin: Boolean,
  
})

const User = mongoose.model("User", userSchema)

module.exports = User