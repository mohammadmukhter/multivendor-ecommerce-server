const User = require("../../models/Person");

const verifyEmailByServerEmail = async (req, res, next) => {
  const userId = req.decoded._id;
  const userEmail = req.decoded.email;
  const loggedUser = await User.findOne({ _id: userId });
  if (userEmail != loggedUser.email) {
    return res
      .status(403)
      .json({ error: true, message: "unauthorized access!" });
  }
  req.userData = loggedUser;
  next();
};
module.exports = verifyEmailByServerEmail;
