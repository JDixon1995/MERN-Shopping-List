const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ItemSchema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    type: Date,
    default: Date
})

module.exports = Item = mongoose.model('Item', ItemSchema)