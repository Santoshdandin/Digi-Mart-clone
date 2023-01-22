const express = require("express")
const {UserModel} = require("../models/User.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const userRouter = express.Router()


userRouter.get("/", async (req, res) => {
  
    try {
      let users=await UserModel.find({})
      res.send(users)
    } catch (error) {
      console.log(error);
      res.send({"msg":"something Went wrong "})
    }        
});

userRouter.post("/register", async (req,res)=>{
    const {name,mobile,email,password} = req.body

    try {
        const existUser = await UserModel.find({ email })

if(existUser.length>0){
    res.send({"msg":"User already exists","signup":false});
} else {
    bcrypt.hash(password,5, async (err,secure_password)=>{
        if(err){
            console.log(err);
        } else {
            const user = new UserModel({name,mobile,email,password:secure_password})
            await user.save()
            res.send({"msg":"Registered"})
        }
    })
}

    } catch (error) {
        res.send({"msg":"Error in registering user"})
        res.send(error)
    }
})


userRouter.post("/login", async(req,res)=>{
    const {email,password} = req.body

    try {
        const user = await UserModel.find({email})
        const userData=await UserModel.findOne({email}).select({"password":0,_id:0})

        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    const token = jwt.sign({userID:user[0]._id},process.env.key);
                    res.send({"msg":"Login Successfull", "login":true,"token":token,"userData":userData})
                } else {
                    res.send({"msg":"wrong credential"})
                }
            })
        } else {
            res.send({"msg":"Please Signup first"})
        }
    } catch (error) {
        console.log({"msg":"Something went wrong"});
        console.log(error);
    }
})

userRouter.delete("/delete/:id", async (req, res) => {
  let id=req.params.id
    try {
      let users=await UserModel.findByIdAndDelete({_id:id})
      res.send({msg:"user deleted"})
    } catch (error) {
      console.log(error);
      res.send({"msg":"something Went wrong "})
    }        
});

module.exports = {userRouter}