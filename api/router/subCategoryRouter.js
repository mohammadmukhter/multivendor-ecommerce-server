const express = require("express");
const {
  addSubCategoryController,
} = require("../controllers/subCategoryController");
const router = express.Router();

// internal imports

// all the middleware

// sub category add router
router.post("/", addSubCategoryController);

module.exports = router;
