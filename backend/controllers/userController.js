const express= require('express');
const mongoose= require('mongoose');

const router= express.Router();//help me to create path

const UserModel= mongoose.model('User');
//get all Users Data
router.get("/",(req,res)=>{
    UserModel.find()
    .then((docs)=>{console.log(docs);
        res.status(200).send(docs)
    })
    .catch((err)=> console.log(err))
})
//save data in database using post method
router.post("/",(req,res)=>{
    console.log(req.body);
    var user= new UserModel();
    user.fname=req.body.fname;
    user.email=req.body.email;
    user.password= req.body.password;
    user.country= req.body.country;

    user.save().then((doc)=>{
        res.status(201).send(doc);
    }).catch((err)=>console.log("Error occured "+err))

})
router.get('/:id',(req,res)=>{
    const id= req.params.id;
    UserModel.findById(id)
    .then((doc)=>res.status(200).send(doc))
    .catch((err)=>{
        console.log("Error Occured: "+err);
        res.status(404).send(err);
    })
})
router.delete('/:id',(req,res)=>{
    const id= req.params.id;
    UserModel.findByIdAndRemove(id)
    .then(()=>{ res.status(200).send({message: "User Deleted Successfully"})})
    .catch((err)=>{
        res.status(404).send({message:`Can not delete the use with ${id}`})
    })
})
router.put('/:id',(req,res)=>{
    const id= req.params.id;
    if(!req.body){
        return res.status(400).send({message:"Data can not be empty for update"});
    }
    UserModel.findByIdAndUpdate(id,req.body)
    .then((data)=>{
        if(!data){
            res.status(404).send({message:"User Not Found"})
        }else{
            res.status(200).send({message:"User Updated successfully"})
        }
    }).
    catch((err)=>{
        res.status(500).send({message:"Error while updating user data"})
    })
})

module.exports= router;