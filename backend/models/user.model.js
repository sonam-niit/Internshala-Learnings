const mongoose=require('mongoose');
const Schema= mongoose.Schema;

let UserSchema= new Schema({
    fname: {
        type:String,
        required:true,
        max:100
    },
    email:{
        type:String,
        required:true,
        max:100
    },
    password:{
        type:String,
        required:true,
        max:100
    },
    country:{
        type:String,
        required:true,
    }
})
module.exports = mongoose.model('User',UserSchema)