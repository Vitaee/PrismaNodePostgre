const express = require("express");
const router = express.Router();
//require("express-async-errors");
const boats = require('./boats');

router.use('/boat', boats);
module.exports = router;