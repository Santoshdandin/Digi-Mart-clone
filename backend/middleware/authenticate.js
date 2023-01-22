const jwt=require("jsonwebtoken");
require("dotenv").config();

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
if(token){
    const decode=jwt.verify(token,process.env.key)
    if(decode){
        const userId=decode.userID;
        req.body.userID=userId; 
        next();
    }else{
        res.send({msg:"please login first"})
    }
}else{
    res.send({msg:"plese login first"})
}
}

module.exports={authenticate}