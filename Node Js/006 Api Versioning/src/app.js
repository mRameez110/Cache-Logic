require("dotenv").config();
const { default: helmet } = require("helmet");
const cors = require("cors");
const compression = require("compression");

const userRouteV1 = require("./api/v1/routes/userRoute");
const taskRouteV1 = require("./api/v1/routes/taskRoute");

const userRouteV2 = require("./api/v2/routes/userRoute");
const taskRouteV2 = require("./api/v2/routes/taskRoute");

const errorHandler = require("./middlewares/errorHandler");
const { RouteNotFoundError } = require("./utils/constants/errors/errorClass");

const connectDB = require("./utils/helper/db/connection");
connectDB();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;

app.use("/api/v1/users", userRouteV1);
app.use("/api/v1/tasks", taskRouteV1);
app.use("/api/v2/users", userRouteV2);
