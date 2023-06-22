const bcrypt = require("bcrypt");
const User = require("../models/Person");
const { default: axios } = require("axios");
const FormData = require("form-data");

const addUserController = async (req, res, next) => {
  const hashPassword = await bcrypt.hash(req.body.password, 10);

  let payload = new FormData();
  payload.append("image", req.file.buffer, {
    filename: req.file.originalname,
    contentType: req.file.mimetype,
  });

  const imageUploaded = await axios.post(
    `https://api.imgbb.com/1/upload?key=${process.env.IMG_UPLOAD_KEY}`,
    payload,
    {
      headers: payload.getHeaders(),
    }
  );

  console.log(req.body);
  console.log(imageUploaded.data.data.url);
  console.log(imageUploaded.data.data.delete_url);
  console.log(imageUploaded.data.success);

  if (req.fileValidationError) {
    return res.status(400).json(req.fileValidationError.message);
  }

  res.status(200).json({ success: true });
};

module.exports = {
  addUserController,
};
