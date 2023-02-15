const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    companyName: String,
    companyType: String,
    contactPerson: String,
    department: String,
    branch: String,
    email: { type: String, unique: true },
    number: Number,
    address: String,
    permanentAddress: String,
    city: String,
    website: String,
    description: String,
    password: String,

   
   
    
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
