require("dotenv").config();
const { default: helmet } = require("helmet");
const cors = require("cors");
const compression = require("compression");

const userRouteV1 = require("./api/v1/routes/userRoute");
const taskRouteV1 = require("./api/v1/routes/taskRoute");

const userRouteV2 = require("./api/v2/routes/userRoute");
const taskRouteV2 = require("./api/v2/routes/taskRoute");
