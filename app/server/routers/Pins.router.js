const express = require("express");
const { createPin, getPins } = require("../controller/Pins.controller");
const router = express.Router();

//create pin
router.post("/pins", createPin);
router.get("/pins", getPins);

module.exports = router;
