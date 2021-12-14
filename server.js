// Imports to server
const express = require('express')
const mongoose = require('mongoose')
const items = require('./routes/api/items')

//Initialize Express
const app = express()

// DB Config
const db = require('./config/keys').mongoURI
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

// Use Routes
app.use(express.json())
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`))