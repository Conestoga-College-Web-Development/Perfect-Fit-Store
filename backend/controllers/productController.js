const { Product } = require('../models/productModel');

async function index(req, res) {
  try {
    const products = await Product.find().populate('category');
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const store = async (req, res) => {
  try {
    const { name, description, category_id, price } = req.body;
    const image = req.file.filename;
    console.log(image);

    const product = new Product({ name, description, image, price, category: category_id });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    console.error(error);
    res.status(400).send('Failed to add product');
  }
};

async function update(req, res) {
  try {
    const { name, description, price, _id, category_id } = req.body;
    if (req.file) {
      const image = req.file.filename;
      await Product.findByIdAndUpdate(_id, { name, description, image, price, category: category_id }, { new: true });
    } else {
      await Product.findByIdAndUpdate(_id, { name, description, price, category: category_id }, { new: true });
    }
    res.status(201).send('Product Updated');
  } catch (error) {
    console.error(error);
    res.status(400).send('Failed to edit Product');
  }
}
async function distory(req, res) {
  try {
    const { _id } = req.body;

    const deletedProduct = await Product.findByIdAndDelete(_id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(201).send('Product Deleted');
  } catch (error) {
    console.error(error);
    res.status(400).send('Failed to Delete Product');
  }
}

// Export the functions individually
module.exports = {
  index,
  store,
  update,
  distory,
};
