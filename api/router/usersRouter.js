// external import
const express = require("express");

// internal import
const avatarUploader = require("../middlewares/user/avatarUploader");
const usersController = require("../controllers/usersControler");

// router define
const router = express.Router();

// user post router
router.post("/register", avatarUploader, usersController.addUserController);

module.exports = router;
