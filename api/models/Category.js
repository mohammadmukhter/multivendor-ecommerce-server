const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      lowercase: true,
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

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
