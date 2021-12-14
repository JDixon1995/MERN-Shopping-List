const express = require('express')
const router = express.Router()

// Item Model
const item = require('../../models/item')

// @route GET api/items
// @desc Get All Items
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then((items) => res.json(items))
})

// @route POST api/items
// @desc Create an item
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
    res.send(newItem)
})

// @route DELETE api/items
// @desc Delete an item
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
})


module.exports = router