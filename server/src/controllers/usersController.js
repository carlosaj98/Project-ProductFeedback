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

  res.setHeader("x-auth-token", token)
  res.send("Usuario registrado y logueado")
}

const login = async (req, res) => {
  const { password: plainTextPassword, username } = req.body

  const user = await User.findOne({ username })
  if (!user) return res.status(400).send("El usuario y contraseña no coincide")

  const isValidUser = await bcrypt.compare(plainTextPassword, user.password)
  if (!isValidUser)
    return res.status(400).send("El usuario y contraseña no coincide")

  const token = jwt.sign(
    { username: user.username, isAdmin: user.isAdmin, id: user.id },
    process.env.jwtPrivateKey
  )

  res.setHeader("x-auth-token", token)
  res.send("Usuario logueado")
}

module.exports = {
  register,
  login,
}
