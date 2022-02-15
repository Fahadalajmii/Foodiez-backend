const Recipie = require("../../models/recipie");

const getAllRecipies = async (req, res, next) => {
  try {
    const recipies = await Recipie.find();
    res.json(recipies);
  } catch (error) {
    console.error(error);
  }
};

const createRecipe = async (req, res, next) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    return res.status(201).json(newRecipe);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const viewRecipe = async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    next(error);
  }
};
module.exports = {
  getAllRecipies,
  createRecipe,
  viewRecipe,
};
