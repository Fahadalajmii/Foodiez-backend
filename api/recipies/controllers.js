const Recipe = require("../../models/Recipe");

const getAllRecipies = async (req, res, next) => {
  try {
    const recipies = await Recipe.find();
    res.json(recipies);
  } catch (error) {
    console.error(error);
  }
};

const createRecipe = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    req.body.category = categoryId;
    console.log(req.body);
    const newRecipe = await Recipe.create(req.body);
    return res.status(201).json(newRecipe);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const viewRecipe = async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    const foundRecipe = await Recipe.findById(recipeId);
    if (foundRecipe) return res.json(foundCategory);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
const updateRecipe = async (req, res) => {
  const { recipeId } = req.params;
  const recipeupdate = req.body;
  try {
    const updatedRecipe = await Product.findByIdAndUpdate(
      recipeId,
      recipeupdate,
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ msg: "Updated successfully", payload: updatedRecipe });
  } catch (error) {
    res.status(400).json({ msg: error.msg });
    next(error);
  }
};

module.exports = {
  getAllRecipies,
  createRecipe,
  viewRecipe,
  updateRecipe,
};
