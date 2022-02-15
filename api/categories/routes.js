const express = require("express");
const {
  getAllCategories,
  createCategory,
  getCategoryRecipies,
} = require("./controllers");
const routes = express.Router();

//fetch categories
routes.get("/categories", getAllCategories);
//create a category
routes.post("/categories", createCategory);
//fetch the recipies of a single category
routes.get("/categories/:category", getCategoryRecipies);

module.exports = routes;
