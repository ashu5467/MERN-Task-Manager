const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());


// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mern-tasks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

const taskRouter = require('./routes/tasks');
app.use('/tasks', taskRouter);
