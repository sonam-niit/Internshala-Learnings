const connectivity= require('./models/index');
const cors= require('cors')
const express= require('express');
const application= express();

application.use(express.json())
const userController= require('./controllers/userController')
const authController= require('./controllers/authController')
application.use(cors())
application.get("/",(req,res)=>{
    res.render("<h1>Welcome to my Backend Application</h1>")
})
application.use("/api/user",userController);
application.use("/api/user",authController);

application.listen("5000",()=>{
    console.log("My Server started on port 5000")
})