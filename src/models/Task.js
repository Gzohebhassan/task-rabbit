const mongoose = require('mongoose');

//task model and schema

const taskSchema = new mongoose.Schema({
    title : {type : String, requried : true},
    description : {type : String},
    status : {type : String, enum: ['Completed', 'In Progress', 'Not Started'], default : 'Not Started'},
    created_by : {type: mongoose.Schema.Types.ObjectId, ref : 'User'}
},
{timestamps: true});

module.exports = mongoose.model('Task', taskSchema);