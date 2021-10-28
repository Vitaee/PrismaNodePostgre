const express = require("express");
const router = express.Router();
const boatController = require('../controllers/boats');



router.get('/filter', boatController.filterJs);
router.post('/save', boatController.saveBoat);
router.get('/:id',boatController.byIdBoat);
router.get('/all', boatController.returnAll);
module.exports = router;