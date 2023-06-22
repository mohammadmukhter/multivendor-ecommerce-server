// external imports
const multer = require("multer");
const createHttpError = require("http-errors");

function singleFileUploader(allowed_file_types, max_file_size, error_msg) {
  const upload = multer({
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_types.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(createHttpError(error_msg));
      }
    },
  });

  return upload;
}

module.exports = singleFileUploader;
