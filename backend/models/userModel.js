const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    name: { type: String, required: true, maxlength: 50 },
    avatar: { type: String, required: true},
    email: { type: String, required: true, unique: true, match: /^\S+@\S+\.\S+$/ },
    password:{type:String,required:true},
    created_at:{type:Date,default:Date.now},
    updated_at:{type:Date,default:Date.now}
})

const model=mongoose.model('user',userSchema); 
// is creating a Mongoose model named 'user' based on the provided schema userSchema.

module.exports=model;