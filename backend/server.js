const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");

app.use(express.json());
app.use(helmet());

require("./config/database")();

require("dotenv").config({
  path: "./config/.env",
});

const morgan = require("morgan");
app.use(morgan("dev"));

//Session for storing user
const session = require("express-session");
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
  })
);

//Passing user to application
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  res.locals.session = req.session;
  next();
});

// Serving client
app.use(
  cors({
    origin: "192.168.29.214:19000",
  })
);

//Heating up the PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server is running on PORT: ${PORT}`));
