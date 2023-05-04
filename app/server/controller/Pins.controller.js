const Pin = require("../models/Pins");

const createPin = async (req, res) => {
  try {
    const newPin = new Pin(req.body);
    await newPin.save();
    res.status(201).json({
      pin: newPin,
      success: true,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
const getPins = async (req, res) => {
  try {
    const pins = await Pin.find();
    res.status(201).json({
      pins: pins,
      success: true,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createPin, getPins };
