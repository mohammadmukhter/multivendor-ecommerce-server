// internal imports
const Product = require("./../models/Product");

// add a new product controller
const addProduct = async (req, res, next) => {
  const productData = req.body;
  const filesData = req.files;
  const productImg = filesData.map((x) => {
    return x.filename;
  });

  try {
    const newData = new Product({
      ...productData,
      productImg: productImg,
    });

    const result = await newData.save();

    res.status(200).json({ inserted: true, result });
  } catch (err) {
    res.status(500).json({ error: true, msg: "Something went wrong!" });
  }
};

// get all the product controller
const products = async (req, res, next) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(500).json({ error: true, err });
  }
};

module.exports = {
  addProduct,
  products,
};
