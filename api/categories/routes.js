const express = require("express");
const {
  getAllCategories,
  createCategory,
  getCategoryRecipies,
} = require("./controllers");
const categoryRoutes = express.Router();

//fetch categories
categoryRoutes.get("/categories", getAllCategories);
//create a category
categoryRoutes.post("/categories", createCategory);
//fetch the recipies of a single category
categoryRoutes.get("/categories/:category", getCategoryRecipies);

module.exports = categoryRoutes;
