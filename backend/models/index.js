const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/backend',{useNewUrlParser:true})
const user= require('./user.model')