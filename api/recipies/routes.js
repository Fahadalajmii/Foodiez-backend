const express = require("express");
const {
  getAllRecipies,
  createRecipe,
  viewRecipe,
  updateRecipe,
} = require("./controllers");
const recipeRoutes = express.Router();
const upload = require("../../middleWare/multer");

//fetch all recipies
recipeRoutes.get("/recipies", getAllRecipies);
//create a recipies
recipeRoutes.post(
  "/recipies/:categoryId",
  upload.single("image"),
  createRecipe
);
//view single recipe
recipeRoutes.get("/recipies/:recipeId", viewRecipe);
//modify a recipe
recipeRoutes.put("/recipies/:recipeId", upload.single("image"), updateRecipe);

module.exports = recipeRoutes;
