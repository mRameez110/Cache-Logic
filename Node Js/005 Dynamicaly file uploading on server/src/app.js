require("dotenv").config();
const express = require("express");
const { default: helmet } = require("helmet");
const cors = require("cors");
const compression = require("compression");
const bodyParser = require("body-parser");

const userRoute = require("./api/routes/userRoute");
