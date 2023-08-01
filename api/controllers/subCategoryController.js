// internal imports
const SubCategory = require("./../models/SubCategory");

const addSubCategoryController = async (req, res, next) => {
  const subCategoryData = req.body;
  const insertAbleSubCategory = new SubCategory(subCategoryData);

  try {
    const result = await insertAbleSubCategory.save();
    res.json({ inserted: true, result });
  } catch (err) {
    res.status(500).json({ inserted: false, err });
  }
};

module.exports = {
  addSubCategoryController,
};
