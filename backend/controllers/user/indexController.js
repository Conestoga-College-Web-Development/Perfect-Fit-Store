const { Category } = require('../../models/categoryModel');
const { Product } = require('../../models/productModel');

const getCategory = async (req, res) => {
  try {
    const categories = await Category.find().limit(4);
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getProduct = async (req, res) => {
  try {
    const data = await Product.find().populate('category').limit(6);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getCategory,
  getProduct,
};
