const express = require("express");
const { createIngredient, getAllIngredients } = require("./controllers");
const ingredientRoutes = express.Router();
const upload = require("../../middleWare/multer");

//create a new ingredient
ingredientRoutes.post("/ingredient", upload.single("image"), createIngredient);
// Get All ingredients
ingredientRoutes.get("/ingredient", getAllIngredients);

module.exports = ingredientRoutes;
