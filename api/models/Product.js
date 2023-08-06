const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
    lowercase: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
    required: true,
  },
  vendorEmail: {
    type: String,
    required: true,
    lowercase: true,
  },
  availableQuantity: {
    type: Number,
    required: true,
  },
  buyingPrice: {
    type: Number,
    required: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
    required: true,
    lowercase: true,
  },
  model: {
    type: String,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  productImg: [
    {
      type: String,
      required: true,
    },
  ],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
