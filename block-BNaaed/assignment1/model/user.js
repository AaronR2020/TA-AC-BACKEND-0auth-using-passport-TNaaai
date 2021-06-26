const { Mongoose, Schema } = require("mongoose");

userSchema=new Schema({
    name:String,username:String,email:String,photo:String,
})
module.export=model.Mongoose('User',userSchema);