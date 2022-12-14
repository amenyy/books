const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config();
app.use(router);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
