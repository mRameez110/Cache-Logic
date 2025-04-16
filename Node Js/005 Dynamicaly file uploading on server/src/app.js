require("dotenv").config();
const express = require("express");
const { default: helmet } = require("helmet");
const cors = require("cors");
const compression = require("compression");
const bodyParser = require("body-parser");

const userRoute = require("./api/routes/userRoute");
const taskRoute = require("./api/routes/taskRoute");
const uploadRoute = require("./api/routes/uploadRoute");
const errorHandler = require("./middlewares/errorHandler");
const { RouteNotFoundError } = require("./utils/constants/errors/errorClass");
const connectDB = require("./utils/helper/db/connection");

const app = express();
connectDB();
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
	console.log(`Request URL: ${req.url}`);
	next();
});

app.use("/uploads", express.static("src/public/uploadDir"));
app.use("/upload", uploadRoute);
