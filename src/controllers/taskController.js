const Task = require('../models/Task');


// creating a task for a logged in user logic

exports.createTask = async (req, res) => {
    try{
        const newTask = new Task({ ...req.body, created_by: req.user.userId});
        await newTask.save();
        res.status(201).json(newTask);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

// gettting the list of task/ tasks for a logged in user logic

exports.getTask = async (req, res) => {
    try{
        const tasks = await Task.find({created_by: req.user.userId});
        res.json(tasks);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}