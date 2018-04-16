const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB configstore
const db = require('./config/keys.js').mongoURI;

//connect to mongodb

mongoose
    .connect('mongodb://shridatta:root@ds247449.mlab.com:47449/social_network')
    .then(()=>console.log('MongoDB connected'))
    .catch(err=>console.log(err));


app.get('/',(req,res)=>res.send('Hello'));

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server running on port ${port}`));
