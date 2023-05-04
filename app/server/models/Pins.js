const mongoose = require("mongoose");

const pinSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 3,
    },
    desc: {
      type: String,
      min: 3,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pin", pinSchema);
