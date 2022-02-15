const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/data");
const routes = require("./api/categories/routes");
dotenv.config();
const app = express();
app.use(express.json());

app.use("/api", routes);
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
  // connect mongoose
  connectDB();
});
