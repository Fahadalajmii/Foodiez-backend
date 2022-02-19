const Ingredient = require("../../models/Ingredient");

const getAllIngredients = async (req, res, next) => {
  try {
    const Ingredients = await Ingredient.find();
    res.json(Ingredients);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const createIngredient = async (req, res, next) => {
  try {
    console.log(req.body);
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path} `;
      req.body.image = req.body.image.replace("\\", "/");
    }
    const newIngredient = await Ingredient.create(req.body);

    return res.status(201).json(newIngredient);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  createIngredient,
  getAllIngredients,
};
