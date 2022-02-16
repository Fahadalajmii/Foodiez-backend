const Ingredient = require("../../models/ingredient");

const createIngredient = async (req, res, next) => {
  try {
    const newIngredient = await ingredient.create(req.body);
    return res.status(201).json(newIngredient);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  createIngredient,
};
