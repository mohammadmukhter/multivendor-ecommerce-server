const express = require("express");
const router = express.Router();

// all internal imports
const {
  addCategoryController,
  categories,
} = require("./../controllers/categoryController");

// all middleware
const verifyToken = require("../middlewares/verifyToken/verifyToken");
const verifyEmailByServerEmail = require("../middlewares/verifyToken/verifyEmailByServerEmail");

// add a category router
router.post("/", verifyToken, verifyEmailByServerEmail, addCategoryController);

// get all the category router
router.get("/", verifyToken, verifyEmailByServerEmail, categories);

module.exports = router;
