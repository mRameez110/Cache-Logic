// app.js

require("dotenv").config();
const express = require("express");

const { default: helmet } = require("helmet");
const cors = require("cors");
const compression = require("compression");

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const app = express();
const PORT = process.env.PORT || 3001;
app.get("/", (req, res) => {
	res.send("Server is running!");
});

app.listen(PORT, () => console.log("Server started on PORT ", PORT));
