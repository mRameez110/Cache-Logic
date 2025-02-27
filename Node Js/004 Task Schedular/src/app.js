require("dotenv").config();
const express = require("express");
const { default: helmet } = require("helmet");
const cors = require("cors");
const compression = require("compression");

const userRoute = require("./api/routes/userRoute");
const taskRoute = require("./api/routes/taskRoute");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

connectDB();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;

app.use("/api/users", userRoute);
app.use("/api/tasks", taskRoute);

app.all("*", (req, res) => {
  throw new RouteNotFoundError();
});

app.use(errorHandler);

app.listen(PORT, () => console.log("Server started on PORT ", PORT));
