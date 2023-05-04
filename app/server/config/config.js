require("dotenv").config();

const dev = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI,
};

module.exports = dev;
