module.exports = function (){

  if(!process.env.jwtPrivateKey) {
    console.log("jwtPrivateKey is not defined")
    process.exit(1)
  }
}