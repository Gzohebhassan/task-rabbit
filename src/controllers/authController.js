const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//register a new user - logic

exports.register = async (req, res) => {
    const {username, password} = req.body;
    try{
        const hashed = await bcrypt.hash(password, 10);
        const newUser = new User({username, password: hashed});
        await newUser.save();
        res.status(201).json({message: "new user registered"});
    } catch(error){
        res.status(400).json({error : error.message});
    }
};


//login a user - logic

exports.login = async (req, res) => {
    const {username, password} = req.body;
    try{
        const user = await User.findOne({username});
        if (!user || !(await bcrypt.compare(password, user.password))){
            return res.status(401).json({message : "not correct creds"});
        }
        const token = jwt.sign({userId : user._id}, process.env.JWT_SECRET);
        res.json({token});
    } catch(error){
        res.status(500).json({error : error.message});
    }
};