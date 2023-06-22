const singleFileUploader = require("../../controllers/singleFileUploader");

const avatarUploader = (req, res, next) => {
  const upload = singleFileUploader(
    ["image/jpeg", "image/jpg", "image/png"],
    1048576,
    "Only .jpg, jpeg or .png format allowed!"
  );

  upload.single("image")(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });

  return upload;
};

module.exports = avatarUploader;
