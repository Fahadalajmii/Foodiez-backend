const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/data");
const categoryRoutes = require("./api/categories/routes");
const ingredientRoutes = require("./api/ingredients/routes");
const recipeRoutes = require("./api/recipies/routes");
dotenv.config();
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api", categoryRoutes);
app.use("/api", recipeRoutes);
app.use("/api", ingredientRoutes);
app.listen(process.env.PORT, () => {
  console.log(`***The app is listening on port ${process.env.PORT}***`);
  // connect mongoose
  connectDB();
});
