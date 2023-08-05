// internal imports
const SubCategory = require("./../models/SubCategory");

// get all the sub categories data
const subCategoriesController = async (req, res, next) => {
  const categoryId = req.params.id;

  let allSubCategoriesData;

  if (categoryId) {
    allSubCategoriesData = await SubCategory.find({
      categoryId: categoryId,
    }).populate("categoryId", "categoryName");
  } else {
    allSubCategoriesData = await SubCategory.find({}).populate(
      "categoryId",
      "categoryName"
    );
  }
  res.status(200).json(allSubCategoriesData);
};

// add a sub category controller
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

// update a sub Category controller
const updateSubCategory = async (req, res, next) => {
  const subCategoryId = req.params.id;
  const newSubCategoryData = req.body;

  const filter = { _id: subCategoryId };
  const result = await SubCategory.updateOne(filter, newSubCategoryData);
  res.status(200).json({ updated: true, result });
};

// delete a sub Category controller
const deleteSubCategory = async (req, res, next) => {
  const subCategoryId = req.params.id;

  const filter = { _id: subCategoryId };
  const result = await SubCategory.deleteOne(filter);
  res.status(200).json({ deleted: true, result });
};

module.exports = {
  addSubCategoryController,
  subCategoriesController,
  updateSubCategory,
  deleteSubCategory,
};
