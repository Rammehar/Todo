const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const app = express();
const cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Database connected...");
  });

//midlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(cors());

const toDoRoutes = require("./routes/toDoList");
app.use("/api", toDoRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server connect on port ${port}`);
});
