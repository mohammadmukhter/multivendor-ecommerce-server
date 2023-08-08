const express = require("express");
const router = express.Router();

// internal imports
const { addProduct, products } = require("../controllers/productController");

// all the middleware
const productImageUploader = require("./../middlewares/product/productImageUploader");
const verifyToken = require("../middlewares/verifyToken/verifyToken");

// add a product router
router.post("/", verifyToken, productImageUploader, addProduct);

// get all product data router || public api router
router.get("/", products);

module.exports = router;
