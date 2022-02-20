const Category = require("../../models/Category");

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getCategoryRecipies = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const foundCategory = await Category.findById(categoryId).populate(
      "recipies"
    );
    console.log(foundCategory);

    if (foundCategory) {
      return res.json(foundCategory.recipies);
    } else {
      res.status(404).json({ msg: "Recipes not found" });
      next(error);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  getCategoryRecipies,
};
