const dotenv = require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./utils/db");

const companiesRouter = require("./routes/companies");

require("colors");

connectDB();
const server = express();
server.use(helmet());
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

let currentTime = new Date().toLocaleString();

server.get("/test", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Server is live",
    date: currentTime,
    author: "Github @willwearing",
  });
});

server.use("/api/companies", companiesRouter);

const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
  console.log(`\n\t\** Server is listening on ${PORT}`.rainbow);
});
