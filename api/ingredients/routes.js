const express = require("express");
const { createIngredient } = require("./controllers");
const ingredientRoutes = express.Router();
const upload = require("../../middleWare/multer");

//create a new ingredient
ingredientRoutes.post("/ingredient", upload.single("image"), createIngredient);

module.exports = ingredientRoutes;
