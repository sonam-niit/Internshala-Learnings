const mongoose = require("mongoose");
/*
  When the strict option is set to true, Mongoose will ensure that only the fields that 
  are specified in your schema will be saved in the database, and all other fields will 
  not be saved (if some other fields are sent) which not mentioned in Schema
*/
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGOBD_URL);
mongoose.connection.on("connected", () => {
  console.log("DataBase successfully connected ");
});
mongoose.connection.on("error", () => {
  console.log("DataBase Not connected ");
});