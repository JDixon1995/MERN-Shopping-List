// Imports to server
const express = require('express')
const mongoose = require('mongoose')

//Initialize Express
const app = express()

// DB Config
const db = require('./config/keys').mongoURI
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))
app.listen()