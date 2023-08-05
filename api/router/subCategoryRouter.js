const express = require("express");
const {
  addSubCategoryController,
  subCategoriesController,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/subCategoryController");
const router = express.Router();

// internal imports

// all the middleware

// get all the sub category router
router.get("/", subCategoriesController);

// get all the sub category  by category Id router
router.get("/:id", subCategoriesController);

// sub category add router
router.post("/", addSubCategoryController);

// update a sub Category router
router.patch("/:id", updateSubCategory);

// delete a sub Category router
router.delete("/:id", deleteSubCategory);

module.exports = router;
