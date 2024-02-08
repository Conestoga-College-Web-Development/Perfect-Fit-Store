const jwtToken = require('jsonwebtoken');

function jwtTokenVerfiy(req,res,next){
    const token=req.header('Authorization');
   try{
    if(token){
        const decoding=jwtToken.verify(token,'Perfect-Fit')
        req.id=decoding.id;
        next();
    }else{
        console.log("Token not valid");
        return res.status(401).json({"Error-message":"Token not valid"})
    }
   }catch(error){
    console.log(error);
   }
}
module.exports = jwtTokenVerfiy;