const express = require('express');
const router = express.Router();
const { Item } = require('../../models/item');

router.get('/', (req, res) => {
	Item.find()
		.sort({
			date: 1
		})
		.then(items => res.json(items));
});

router.post('/', (req, res) => {

	let newItem = new Item({
		name: req.body.name
	})
	newItem.save()
		.then(item => res.json(item));
});

router.delete('/:id', (req, res) => {

	let deleteItem = Item.findById(req.params.id)
		.then(item => item.remove())
		.then(() => res.send("deleted"))
		.catch(err => res.status(404).json({ success: false }));
});

module.exports = router;