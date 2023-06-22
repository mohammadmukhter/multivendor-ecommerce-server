// external import
const express = require("express");
// const multer = require("multer");

const router = express.Router();
const avatarUploader = require("../middlewares/user/avatarUploader");
// // const upload = multer();

// const upload = multer({
//   limits: {
//     fileSize: 1 * 1024 * 1024,
//   },
//   fileFilter: (req, file, cb) => {
//     const allowedFileType = ["image/jpg", "image/jpeg", "image/png"];
//     if (allowedFileType.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       req.fileValidationError = {
//         error: true,
//         msg: "invalid file type. Only jpeg, jpg and png images are allowed!",
//       };
//       cb(null, false);
//     }
//   },
// });

router.post("/register", avatarUploader, async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  if (req.fileValidationError) {
    return res.status(400).json(req.fileValidationError.message);
  }

  res.status(200).json({ success: true });
});

module.exports = router;
