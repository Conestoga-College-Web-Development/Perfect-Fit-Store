const { Category } = require('../models/categoryModel');

async function index(req, res) {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const store = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file.filename;
    console.log(image);

    const category = new Category({ name, description, image });
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    console.error(error);
    res.status(400).send('Failed to add category');
  }
};

async function update(req, res) {
  try {
    const { name, description, price, _id } = req.body;
    if (req.file) {
      const image = req.file.filename;
      await Category.findByIdAndUpdate(_id, { name, description, image, price }, { new: true });
    } else {
      await Category.findByIdAndUpdate(_id, { name, description, price }, { new: true });
    }
    res.status(201).send('Category Updated');
  } catch (error) {
    console.error(error);
    res.status(400).send('Failed to edit Category');
  }
}
async function distory(req, res) {
  try {
    const { _id } = req.body;

    const deletedCategory = await Category.findByIdAndDelete(_id);

    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(201).send('Category Deleted');
  } catch (error) {
    console.error(error);
    res.status(400).send('Failed to Delete Category');
  }
}

// Export the functions individually
module.exports = {
  index,
  store,
  update,
  distory,
};
