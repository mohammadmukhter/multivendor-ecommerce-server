// external import
const express = require("express");
const multer = require("multer");

const router = express.Router();

const upload = multer({
  limits: {
    fileSize: 1 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedFileType = ["image/jpg", "image/jpeg", "image/png"];
    if (allowedFileType.includes(file.mimetype)) {
      cb(null, true);
    } else {
      req.fileValidationError = {
        error: true,
        msg: "invalid file type. Only jpeg, jpg and png images are allowed!",
      };
      cb(null, false);
    }
  },
});

router.post("/register", upload.any(), async (req, res) => {
  console.log(req.file);
  res.json({
    message: "success",
  });
});
