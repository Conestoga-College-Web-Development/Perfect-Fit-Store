const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const { mongoose } = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.s7nlndv.mongodb.net/Perfect?retryWrites=true&w=majority');

app.listen(5000, (req, res) => {
  console.log('Started at 5000');
});
const userRegister = require('./controllers/userRegisterController');
const login = require('./controllers/loginController');
const categoryController = require('./controllers/categoryController');
const productController = require('./controllers/productController');
const { getCategory, getProduct, getProductByCategory, getProductById } = require('./controllers/user/indexController');
//routes

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../frontend/public/uploads');
  },
  filename: function (req, file, cb) {
    let ext = file.mimetype.split('/').reverse()[0];
    cb(null, Date.now() + '.' + ext);
  },
});
const upload = multer({ storage: storage });

app.get('/api/category', categoryController.index);
app.post('/api/category', upload.single('image'), categoryController.store);
app.put('/api/category', upload.single('image'), categoryController.update);
app.patch('/api/category', categoryController.distory);

app.get('/api/product', productController.index);
app.post('/api/product', upload.single('image'), productController.store);
app.put('/api/product', upload.single('image'), productController.update);
app.patch('/api/product', productController.distory);

//User Data Route
app.get('/user/category', getCategory);
app.get('/user/homepage-product', getProduct);
app.get('/user/product-by-category/:category', getProductByCategory);
app.get('/user/product/:id', getProductById);

const jwtTokenVerfiy = require('./middleware/authMiddleware');
app.get('/', jwtTokenVerfiy, (req, res) => {
  console.log('Protected route accessed');
  res.status(200).json({ message: 'success' });
});

app.post('/userRegister', userRegister);
app.post('/login', login);
