const mongoose = require("mongoose");
const dev = require("./config");

mongoose
  .connect(dev.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Mongodb is connected localhost`);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
