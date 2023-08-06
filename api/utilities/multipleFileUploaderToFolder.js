// external imports
const multer = require("multer");
const createHttpError = require("http-errors");
const path = require("path");

function multipleFileUploaderToFolder(
  subFolder_path,
  allowed_file_types,
  max_file_size,
  max_number_of_files,
  error_msg
) {
  // file destination folder
  const UPLOADS_FOLDER = `${__dirname}/../../public/uploads/${subFolder_path}/`;

  // storage define
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },

    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);

      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();

      cb(null, fileName + fileExt);
    },
  });

  // file upload
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (req.files.length > max_number_of_files) {
        cb(
          createHttpError(
            `maximum ${max_number_of_files} files are allowed to upload`
          )
        );
      } else {
        if (allowed_file_types.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(createHttpError(error_msg));
        }
      }
    },
  });

  return upload;
}

module.exports = multipleFileUploaderToFolder;
