const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const router = require("./routes/index");
const env = require("dotenv").config();
const mongoose = require('mongoose');


app.use("*", cors({ origin: "*", methods: "POST" }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);


mongoose.connect(`${process.env.MONGO_DB_URL}`, {
  useNewUrlParser: true,
});


app.get("/", function (req, res, next) {
  res.json({ msg: "API Gateway is running " });
});

const port = process.env.PORT || 3000;
// RUN API GATEWAY
app.listen(port, function () {
  console.log(`API Gateway is running on port ${port}`);
});
