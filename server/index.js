
// IMPORTS FROM PACKAGES
const express = require('express');
const mongoose = require('mongoose');

// IMPORTS FROM OTHER FILES
const authRouter = require('./routes/auth');

// INIT 
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://Rabin:Rabin123@cluster0.25tlh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//  middleware
app.use(authRouter);

// Connections to MongoDB
mongoose.connect(DB).then( () => {
    console.log('Connection Successful');
})
.catch( (e) => {
    console.log('Connection Failed');
})

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})



