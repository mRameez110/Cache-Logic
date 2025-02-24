require("dotenv").config();
const express = require("express");
const { default: helmet } = require("helmet");
const cors = require("cors");
const compression = require("compression");
const connectDB = require("./utils/helpers/db");

const userRoute = require("./api/routes/authRoutes");
const errorHandler = require("./utils/middlewares/errorHandler");
const { RouteNotFoundError } = require("./utils/constants/errors/index");

const app = express();

connectDB();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;

app.use("/user", userRoute);

app.all("*", (req, res) => {
	throw new RouteNotFoundError();
});

app.use(errorHandler);

app.listen(PORT, () => console.log("Server started on PORT ", PORT));
