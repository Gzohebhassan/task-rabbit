const express = require('express');
const authRoute = require('./routes/authRoutes');
const path = require('path');

const taskRoute = require('./routes/taskRoutes');

const app = express();
app.use(express.json());

//Routing paths

app.use('/api/auth', authRoute);
app.use('/api/tasks', taskRoute);


app.get('/', (req, res) => {
    res.send('Welcome to Task Rabbit');
});

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });
module.exports = app;