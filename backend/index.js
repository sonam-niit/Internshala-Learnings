const connectivity= require('./models/index');
const cors= require('cors')
const express= require('express');
const application= express();

application.use(express.json())
const userController= require('./controllers/userController')
application.use(cors())
application.get("/",(req,res)=>{
    res.render("<h1>Welcome to my Backend Application</h1>")
})
application.use("/api/user",userController);

application.listen("5000",()=>{
    console.log("My Server started on port 5000")
})