// external import
const express = require("express");

// internal import
const avatarUploader = require("../middlewares/user/avatarUploader");
const usersController = require("../controllers/usersControler");
const verifyToken = require("../middlewares/verifyToken/verifyToken");
const verifyEmailByServerEmail = require("../middlewares/verifyToken/verifyEmailByServerEmail");

// router define
const router = express.Router();

// get all the users
router.get("/", verifyToken, usersController.getAllUsersController);

// user data insert router
router.post("/register", avatarUploader, usersController.addUserController);

// user login router
router.post("/login", usersController.loginController);

// get specific logged user
router.get(
  "/loggedUser",
  verifyToken,
  verifyEmailByServerEmail,
  usersController.loggedUserController
);

module.exports = router;
