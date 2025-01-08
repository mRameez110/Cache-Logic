require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Home");
});

//   Route Handler if not any path match
app.all("*", (req, res) => {
  res.status(404).send("This route does't exist");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`);
});
