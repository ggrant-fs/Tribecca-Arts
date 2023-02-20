const express = require('express');
const router = express.Router();
const jewelryController = require("../controllers/jewelryController");



router
.route('/')
.get(jewelryController.getAllJewelry)
.post(jewelryController.createJewelry);

router
.route('/:id')
.get(jewelryController.getJewelry)
.put(jewelryController.updateJewelry)
.delete(jewelryController.deleteJewelry);


module.exports = router;