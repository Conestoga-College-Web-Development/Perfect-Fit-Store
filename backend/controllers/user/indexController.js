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

const getProductByCategory = async (req, res) => {
  const categoryName = req.params.category;

  try {
    const category = await Category.findOne({ name: categoryName });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const products = await Product.find({ category: category._id }).populate('category');

    res.json(products);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getCategory,
  getProduct,
  getProductByCategory,
  getProductById,
};
