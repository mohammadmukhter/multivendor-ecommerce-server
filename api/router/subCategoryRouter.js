const express = require("express");
const {
  addSubCategoryController,
  subCategoriesController,
  updateSubCategory,
} = require("../controllers/subCategoryController");
const router = express.Router();

// internal imports

// all the middleware

// get all the sub category router
router.get("/", subCategoriesController);

// sub category add router
router.post("/", addSubCategoryController);

// update a sub Category router
router.patch("/:id", updateSubCategory);

module.exports = router;
