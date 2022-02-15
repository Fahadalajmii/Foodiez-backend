const express = require("express");
const { getAllRecipies, createRecipe, viewRecipe } = require("./controllers");
const routes = express.Router();

//fetch all recipies
routes.get("/recipies", getAllRecipies);
//create a recipies
routes.post("/recipies/", createRecipe);
//view single recipe
routes.post("/recipies/:recipeId", viewRecipe);

module.exports = routes;
