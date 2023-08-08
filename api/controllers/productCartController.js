const addProductCart = async (req, res, next) => {
  const cartData = req.body;
  console.log(cartData);

  res.status(200).json(cartData);
};

module.exports = {
  addProductCart,
};
