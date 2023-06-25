const bcrypt = require("bcrypt");
const User = require("../models/Person");
const { default: axios } = require("axios");
const FormData = require("form-data");

const addUserController = async (req, res, next) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  let newUserData;

  console.log(req.body);
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
      phone: req.body.phone,
      email: req.body.email,
      password: hashedPassword,
      userImage: imageUploaded.data.data.url,
      role: "user",
    });
  } else {
    newUserData = new User({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      password: hashedPassword,
      userImage: "",
      role: "user",
    });
  }
  const userAdded = await newUserData.save();
  res.status(200).json({ success: true, data: userAdded });
};

const loginController = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const getUser = await User.findOne({ email: email });
    const loggedUserInfo = {
      name: getUser.name,
      email: getUser.email,
      userImage: getUser.userImage,
    };

    const checkedPassword = await bcrypt.compare(password, getUser.password);
    // console.log(checkedPassword);

    if (checkedPassword) {
      res.status(200).json(loggedUserInfo);
    } else {
      res.status(403).json({
        error: true,
        msg: "login failed!",
      });
    }
  } catch (err) {
    res.status(403).json({
      error: true,
      err: err,
      msg: "login failed!",
    });
  }
};

module.exports = {
  addUserController,
  loginController,
};
