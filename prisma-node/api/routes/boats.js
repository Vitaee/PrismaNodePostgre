const express = require("express");
const router = express.Router();
const boatController = require('../controllers/boats');

router.get('/:id',boatController.searchBoat);
router.post('/save', boatController.saveBoat)
module.exports = router;