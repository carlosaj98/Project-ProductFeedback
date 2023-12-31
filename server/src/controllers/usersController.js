const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../models/user")

const register = async (req, res) => {
  const { password: plainTextPassword, ...userDetails } = req.body

	const { path: avatar, filename: avatarCloudinaryId } = req.file

  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(plainTextPassword, salt)

  const user = await User.create({
    ...userDetails,
    avatar,
    avatarCloudinaryId,
    password,
    isAdmin: false,
  })

  const token = jwt.sign(
    { username: user.username, isAdmin: user.isAdmin, id: user.id },
    process.env.jwtPrivateKey
  )
  res.setHeader("Access-Control-Expose-Headers", "x-auth-token")
  res.setHeader("x-auth-token", token)
  res.send("Registered and logged in user")
}

const login = async (req, res) => {
  const { password: plainTextPassword, username } = req.body

  const user = await User.findOne({ username })
  if (!user) return res.status(400).send("The username and password do not match")

  const isValidUser = await bcrypt.compare(plainTextPassword, user.password)
  if (!isValidUser)
    return res.status(400).send("The username and password do not match")

  const token = jwt.sign(
    { username: user.username, isAdmin: user.isAdmin, id: user.id },
    process.env.jwtPrivateKey
  )

  res.setHeader("Access-Control-Expose-Headers", "x-auth-token")
  res.setHeader("x-auth-token", token)
  res.send("User logged in")
}

module.exports = {
  register,
  login,
}
