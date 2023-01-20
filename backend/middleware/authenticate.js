const jwt=require=("jsonwebtoken");
require("dotenv").config();

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
if(token){
    const decode=jwt.verify(token,process.env.key)
    if(decode){
        console.log(decode)
        const userId=decode.userId;
        req.body.userId=userId; 
        next();
    }else{
        res.send({msg:"please login first"})
    }
}else{
    res.send({msg:"plese login first"})
}
}

module.exports={authenticate}