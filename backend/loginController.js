const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwtToken = require('jsonwebtoken');
module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      const matchPassword = await bcrypt.compare(req.body.password, user.password);

      if (!matchPassword) {
        return res.status(401).json({ error: 'Password Wrong' });
      } else {
        const token = jwtToken.sign({ id: user._id }, 'Perfect-Fit', {
          expiresIn: '2h',
        });
        res.status(200).json({ token: token, user: user });
      }
    } else {
      console.log('user not found');
      return res.status(401).json({ error: 'User not found' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
