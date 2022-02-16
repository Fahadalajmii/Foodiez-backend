const express = require("express");
const {
  getAllRecipies,
  createRecipe,
  viewRecipe,
  updateRecipe,
} = require("./controllers");
const recipeRoutes = express.Router();

//fetch all recipies
recipeRoutes.get("/recipies", getAllRecipies);
//create a recipies
recipeRoutes.post("/recipies/:recipeId", createRecipe);
//view single recipe
recipeRoutes.get("/recipies/:recipeId", viewRecipe);
//modify a recipe
recipeRoutes.put("/recipies/:recipeId", updateRecipe);

module.exports = recipeRoutes;
