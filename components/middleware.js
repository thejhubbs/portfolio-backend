const jwt = require('jsonwebtoken')

//THIS IS A VERY BAD IDEA REMOVE BEFORE DEPLOY
const authenticate = false

function restricted(req, res, next) {
  if(authenticate) {
    const token = req.headers.authorization

    console.log(process.env.JWT_SECRET, token)
    if(token){
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        console.log("INSIDE VERIFY")
        if(err){
          console.log(err)
          res.status(401).json({message: "Error.", error: err})
        } else {
          req.decodedToken = decodedToken
          next();
        }
      })
    }else{
      res.status(400).json({message: "No token provided."})
    }
  } else{
    next();
  }
}


module.exports = {restricted}
