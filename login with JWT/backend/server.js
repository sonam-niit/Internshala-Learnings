const express = require("express");
const app = express();
const dotenv= require('dotenv').config();
const cors = require("cors");
const conneection=require('./models/dbconfig');

const userRoute = require("./routes/user_route");

app.use(cors());
app.use(express.json());
app.use("/", userRoute);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`)
});
