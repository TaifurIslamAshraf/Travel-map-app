const express = require("express");
const cors = require("cors");
const app = express();

//midellWare
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routers/Pins.router"));
app.use("/api", require("./routers/user.router"));

module.exports = app;
