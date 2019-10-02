const jwt = require('jsonwebtoken')

function restricted(req, res, next) {
  // const token = req.headers.authorization
  //
  // console.log(process.env.JWT_SECRET, token)
  // if(token){
  //   jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
  //     console.log("INSIDE VERIFY")
  //     if(err){
  //       console.log(err)
  //       res.status(401).json({message: "Error.", error: err})
  //     } else {
  //       req.decodedToken = decodedToken
  //       next();
  //     }
  //   })
  // }else{
  //   res.status(400).json({message: "No token provided."})
  // }
  next();
}


module.exports = {restricted}
