const bcrypt = require("bcryptjs");
const users = require("../models/user.model");

// REGISTER
const register = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPassword,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User registered successfully",
  });
};

// LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid password" });
  }

  res.json({
    message: "Login successful",
  });
};

module.exports = {
  register,
  login,
};