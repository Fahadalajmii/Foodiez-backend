const Category = require("../../models/category");

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
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
