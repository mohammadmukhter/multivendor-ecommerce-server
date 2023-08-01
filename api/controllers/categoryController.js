// internal imports
const Category = require("./../models/Category");

// add a category controller
const addCategoryController = async (req, res, next) => {
  const categoryData = req.body;
  const insertAbleData = new Category(categoryData);
  const result = await insertAbleData.save();

  res.json({ inserted: true, result });
};

// get all the categories data controller
const categories = async (req, res, next) => {
  const allCategoryData = await Category.find();

  res.status(200).json(allCategoryData);
};

module.exports = {
  addCategoryController,
  categories,
};
