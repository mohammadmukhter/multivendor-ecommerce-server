const express = require("express");
const router = express.Router();

// all internal imports
const {
  addCategoryController,
  categories,
  updateCategory,
} = require("./../controllers/categoryController");

// all middleware
const verifyToken = require("../middlewares/verifyToken/verifyToken");
const verifyEmailByServerEmail = require("../middlewares/verifyToken/verifyEmailByServerEmail");

// add a category router
router.post("/", verifyToken, verifyEmailByServerEmail, addCategoryController);

// get all the category router
router.get("/", verifyToken, verifyEmailByServerEmail, categories);

// update a category router
router.patch("/:id", verifyToken, verifyEmailByServerEmail, updateCategory);

module.exports = router;
