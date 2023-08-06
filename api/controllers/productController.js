// internal imports
const Product = require("./../models/Product");

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
    if (result) {
      res.status(200).json({ inserted: true, result });
    }
  } catch (err) {
    res.status(500).json({ error: true, msg: "Something went wrong!" });
  }
  res.json({ data: productData, result });
};

module.exports = {
  addProduct,
};
