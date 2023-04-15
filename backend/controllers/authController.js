const express = require('express')
const dotenv= require('dotenv').config()
const router = express.Router();
const UserModel = require("../models/user.model")
//npm i bcryptjs
const bcryptjs = require('bcryptjs');
//npm install jsonwebtoken
const jwt= require('jsonwebtoken')

//Signup Logic
router.post("/signup", (req, res) => {
    const { fname, email, password,country} = req.body;
    if (!fname || !email || !password) {
        return res.status(400).json({ error: "All Fields are mendatory" })
    }

    UserModel.findOne({ email: email })
        .then((foundUser) => {
            if (foundUser) {
                return res.status(500).json({ error: "User is already exisyt" })
            }

            //encryption for password
            bcryptjs.hash(password, 16)
                .then((hashcode) => {
                    const user = new UserModel({ fname, email, password: hashcode, country });
                    user.save().then((resp) => {
                        res.status(201).json({ result: "User Account created Successfully.." })
                    })
                        .catch((error) => console.log(error))
                });
        })
        .catch((error)=>console.log(error))
})

//Login route

router.post("/login",(req,res)=>{

    const {email,password} =req.body;
    if(!email || !password){
        return res.status(400).json({error:"Both fields are mendatory"})
    }
    UserModel.findOne({email:email})
    .then(
        (foundUser)=>{
            if(!foundUser){
                return res.status(400).json("No Account registerd with this emailId")
            }

            bcryptjs.compare(password,foundUser.password)
            .then(
                (didMatch)=>{
                    if(didMatch){
                        const jwtToken= jwt.sign({_id:foundUser._id},process.env.JWT_SECRET);
                        const userDetails={
                            _id:foundUser._id,
                            email:foundUser.email,
                            fname:foundUser.fname
                        };
                        res.status(200).json({result:{token:jwtToken,user:userDetails}})
                    }
                    else{
                        return res.status(400).json("invalid Credentials Entered")
                    }
                }
            )
            .catch((error)=>console.log(error))
        }
    )
    .catch(()=>{console.log(error)})
})



module.exports= router;