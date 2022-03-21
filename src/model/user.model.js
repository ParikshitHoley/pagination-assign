const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    "first_name":{type:String,required:true},
    "last_name":{type:String,required:true},
    "email":{type:String,required:true},
    "type":{type:String,required:false,default:"user"}
    
});

module.exports = mongoose.model("user",userSchema)