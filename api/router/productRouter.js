const express = require("express");
const router = express.Router();

// internal imports
const { addProduct } = require("../controllers/productController");

// all the middleware
const productImageUploader = require("./../middlewares/product/productImageUploader");

// add a product router
router.post("/", productImageUploader, addProduct);

module.exports = router;
