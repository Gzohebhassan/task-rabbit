require('dotenv').config();

//importing required modules

const express = require('express');
const mongoose = require('mongoose');
const app = require('./src/app');
const Express = express();

//this is the entry point for the application. It sets up the server, loads middleware, and defines the routes.

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser : true})
    .then(() => app.listen(PORT, () => console.log("listening on 3000")))
    .catch((error) => console.log(error.message));