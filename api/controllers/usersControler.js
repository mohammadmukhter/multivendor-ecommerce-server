const bcrypt = require("bcrypt");
const User = require("../models/Person");
const { default: axios } = require("axios");
const FormData = require("form-data");

const addUserController = async (req, res, next) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  let newUserData;

  if (req.file) {
    let payload = new FormData();
    payload.append("image", req.file?.buffer, {
      filename: req.file?.originalname,
      contentType: req.file?.mimetype,
    });

    const imageUploaded = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.IMG_UPLOAD_KEY}`,
      payload,
      {
        headers: payload.getHeaders(),
      }
    );

    // console.log(req.body);
    // console.log(imageUploaded.data.data.url);
    // console.log(imageUploaded.data.data.delete_url);
    // console.log(imageUploaded.data.success);

    newUserData = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      userImage: imageUploaded.data.data.url,
      role: "user",
    });
  } else {
    newUserData = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      userImage: "",
      role: "user",
    });
  }
  const userAdded = await newUserData.save();
  res.status(200).json({ success: true, data: userAdded });
};

module.exports = {
  addUserController,
};
