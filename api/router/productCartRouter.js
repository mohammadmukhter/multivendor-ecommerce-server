const express = require("express");
const { addProductCart } = require("../controllers/productCartController");
const router = express.Router();

// add product into cart router
router.post("/", addProductCart);

module.exports = router;
