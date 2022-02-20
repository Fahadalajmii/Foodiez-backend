const Recipe = require("../../models/Recipe");
const Category = require("../../models/Category");
const Ingredient = require("../../models/Ingredient");

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
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path} `;
      req.body.image = req.body.image.replace("\\", "/");
    }
    const categoryId = req.body.category;
    console.log(req.body);

    const newRecipe = await Recipe.create(req.body);
    await Category.findByIdAndUpdate(categoryId, {
      $push: { recipies: newRecipe._id },
    });

    req.body.ing
      .trim()
      .split(",")
      .forEach(async (ingredient) => {
        console.log(ingredient);
        const foundIng = await Ingredient.findOne({ name: ingredient.trim() });
        if (foundIng) {
          await Recipe.findByIdAndUpdate(newRecipe._id, {
            $push: { ingredients: foundIng._id },
          });

          await Ingredient.findByIdAndUpdate(foundIng._id, {
            $push: { recipies: newRecipe._id },
          });
        }
      });
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
    if (foundRecipe) {
      // const findCategory = Category.findById(foundRecipe.category);
      // console.log(res.json(foundRecipe, findCategory.title));
      return res.json(foundRecipe);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const updateRecipe = async (req, res) => {
  if (req.file) {
    req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path} `;
    req.body.image = req.body.image.replace("\\", "/");
  }
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

const deleteRecipe = async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    const foundRecipe = await Recipe.findById(recipeId).populate("category");
    let theCategory = await Category.findById(
      foundRecipe.category._id
    ).populate("recipies");

    if (foundRecipe) {
      await Recipe.findByIdAndDelete(recipeId);
      theCategory = theCategory.recipies.filter(
        (recipe) => recipe._id !== recipeId
      );
      await Category.findByIdAndUpdate(theCategory._id, theCategory);
      res.status(201).end();
    } else {
      res.status(404).json({ msg: "Recipe not found" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  getAllRecipies,
  createRecipe,
  viewRecipe,
  updateRecipe,
  deleteRecipe,
};
