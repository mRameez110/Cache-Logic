require("dotenv").config();
const express = require("express");
const userRoute = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorHandler");
const { RouteNotFoundError } = require("./customErrors/customErrorClass");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3001;

app.use("/user", userRoute);

app.all("*", (req, res) => {
  throw new RouteNotFoundError();
});

app.use(errorHandler);

app.listen(PORT, () => console.log("Server started on PORT ", PORT));
