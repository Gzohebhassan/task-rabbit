const mongoose = require('mongoose');

//user model and schema

const UserSchema = new mongoose.Schema({
username : {type : String, required: true, unique: true},
password : {type : String, required : true, unique: true},
}, 
{timestamps: true});

module.exports = mongoose.model('User', UserSchema);