const express = require("express");
const router = express.Router();

// internal imports
const {
  addCategoryController,
} = require("./../controllers/categoryController");
const verifyToken = require("../middlewares/verifyToken/verifyToken");
const verifyEmailByServerEmail = require("../middlewares/verifyToken/verifyEmailByServerEmail");

router.post("/", verifyToken, verifyEmailByServerEmail, addCategoryController);

module.exports = router;
