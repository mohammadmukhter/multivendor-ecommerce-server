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

// update a category controller
const updateCategory = async (req, res, next) => {
  const categoryId = req.params.id;
  const newData = req.body;

  const filter = { _id: categoryId };

  const result = await Category.updateOne(filter, newData);

  res.status(200).json({ updated: true, result });
};

// delete a category controller
const deleteCategory = async (req, res, next) => {
  const categoryId = req.params.id;
  const filter = { _id: categoryId };

  const result = await Category.deleteOne(filter);
  res.status(200).json({ deleted: true, result });
};

module.exports = {
  addCategoryController,
  categories,
  updateCategory,
  deleteCategory,
};
