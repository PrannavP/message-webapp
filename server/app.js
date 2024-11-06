const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");

const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/api/users/', userRoutes);

module.exports = app;