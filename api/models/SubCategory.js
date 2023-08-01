const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema(
  {
    subCategoryName: {
      type: String,
      required: true,
      lowercase: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

const SubCategory = mongoose.model("SubCategory", subCategorySchema);
module.exports = SubCategory;
