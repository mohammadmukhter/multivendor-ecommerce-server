// internal imports
const Category = require("./../models/Category");

const addCategoryController = async (req, res, next) => {
  const categoryData = req.body;
  const insertAbleData = new Category(categoryData);
  const result = await insertAbleData.save();

  res.json({ inserted: true, result });
};

module.exports = {
  addCategoryController,
};
