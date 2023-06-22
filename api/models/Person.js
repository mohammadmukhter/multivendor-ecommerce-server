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
    avatar: {
      required: true,
    },
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

const Person = mongoose.Model("Person", personSchema);

module.exports = Person;
