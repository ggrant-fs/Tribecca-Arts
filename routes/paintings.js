const express = require('express');
const router = express.Router();
const paintingsController = require('../controllers/paintingsController');


router
.route('/')
.get(paintingsController.getAllPaintings)
.post(paintingsController.createPainting)

router
.route('/:id')
.get(paintingsController.getPainting)
.put(paintingsController.updatePainting)
.delete(paintingsController.deletePainting);

module.exports = router;