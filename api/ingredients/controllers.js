const Ingredient = require("../../models/Ingredient");

const createIngredient = async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    req.body.recipe = recipeId;
    console.log(req.body);

    const newIngredient = await Ingredient.create(req.body);

    return res.status(201).json(newIngredient);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  createIngredient,
};
