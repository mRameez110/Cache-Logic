require("dotenv").config();
const express = require("express");
const { default: helmet } = require("helmet");
const cors = require("cors");
const compression = require("compression");
const connectDB = require("./utils/helper/db/connection");
const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Server started on PORT ", PORT));
