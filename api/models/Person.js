const mongoose = require("mongoose");

const personSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    userImage: {},
    role: {
      type: String,
      required: true,
      enum: ["admin", "vendor", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", personSchema);

module.exports = User;
