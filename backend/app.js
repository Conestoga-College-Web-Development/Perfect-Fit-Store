const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const { Category } = require('./models/categoryModel');

const { mongoose } = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.s7nlndv.mongodb.net/Perfect?retryWrites=true&w=majority');

app.listen(5000, (req, res) => {
  console.log('Started at 5000');
});
const userRegister = require('./controllers/userRegisterController');
const login = require('./controllers/loginController');
//routes
app.post('/api/category', async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    console.error(error);
    res.status(400).send('Failed to add category');
  }
});
const jwtTokenVerfiy = require('./middleware/authMiddleware');
app.get('/', jwtTokenVerfiy, (req, res) => {
  console.log('Protected route accessed');
  res.status(200).json({ message: 'success' });
});
app.post('/userRegister', userRegister);
app.post('/login', login);
