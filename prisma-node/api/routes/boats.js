const express = require("express");
const router = express.Router();
const boatController = require('../controllers/boats');

router.get('/:id',boatController.searchBoat);
router.get('/all', boatController.returnAll);
router.post('/save', boatController.saveBoat);
router.get('/filter=:brand&model=:model', boatController.filterJs);
//model&year=:year&page=:page&limit=:limit&sortType=:sortType'
module.exports = router;