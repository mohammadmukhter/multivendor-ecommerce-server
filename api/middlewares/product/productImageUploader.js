const multipleFileUploaderToFolder = require("../../utilities/multipleFileUploaderToFolder");

const productImageUploader = (req, res, next) => {
  const upload = multipleFileUploaderToFolder(
    "products",
    ["image/jpeg", "image/jpg", "image/png"],
    1048576,
    4,
    "Only .jpg, .jpeg or .png format allowed!"
  );

  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          productImg: {
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

module.exports = productImageUploader;
