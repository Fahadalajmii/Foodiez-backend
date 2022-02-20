const express = require("express");
const {
  getAllRecipies,
  createRecipe,
  viewRecipe,
  updateRecipe,
  deleteRecipe,
} = require("./controllers");
const recipeRoutes = express.Router();
const upload = require("../../middleWare/multer");

//fetch all recipies
recipeRoutes.get("/recipies", getAllRecipies);
//create a recipies
recipeRoutes.post("/recipies", upload.single("image"), createRecipe);
//view single recipe
recipeRoutes.get("/recipies/:recipeId", viewRecipe);
//modify a recipe
recipeRoutes.put("/recipies/:recipeId", upload.single("image"), updateRecipe);
//delete a recipies
recipeRoutes.delete("/recipies/:recipeId", deleteRecipe);

module.exports = recipeRoutes;
