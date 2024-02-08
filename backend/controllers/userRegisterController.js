const User = require("../models/userModel");
const bcrypt = require("bcrypt");
module.exports = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password, firstname, lastname } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      firstname,
      lastname,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Registration failed" });
  }
};
