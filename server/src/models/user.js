const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  image: String,
  name: {type: String, required: true},
  surname: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
  isAdmin: Boolean,
  
})

const User = mongoose.model("User", userSchema)

module.exports = User