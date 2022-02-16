const express = require("express");
const { createIngredient } = require("./controllers");
const ingredientRoutes = express.Router();

//create a new ingredient
ingredientRoutes.post("/ingredient", createIngredient);

module.exports = ingredientRoutes;
