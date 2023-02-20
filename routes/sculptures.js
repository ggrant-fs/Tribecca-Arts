const express = require("express");
const router = express.Router();
const sculptureController = require('../controllers/sculpturesController');


router
.route('/')
.get(sculptureController.getAllSculptures)
.post(sculptureController.createSculpture);

router
.route('/:id')
.get(sculptureController.getSculpture)
.put(sculptureController.createSculpture)
.delete(sculptureController.deleteSculpture);

module.exports = router;