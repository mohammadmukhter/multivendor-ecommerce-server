// external import
const express = require("express");

// internal import
const avatarUploader = require("../middlewares/user/avatarUploader");
const usersController = require("../controllers/usersControler");

// router define
const router = express.Router();

// get all the users
router.get("/", usersController.getAllUsersController);

// user data insert router
router.post("/register", avatarUploader, usersController.addUserController);

// user login router
router.post("/login", usersController.loginController);

module.exports = router;
