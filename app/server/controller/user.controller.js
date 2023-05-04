const bcrypt = require("bcrypt");
const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const userWithUsername = await User.findOne({ username: username });
    const userWithEmail = await User.findOne({ email: email });
    if (userWithEmail && userWithUsername) {
      return res
        .status(400)
        .json({ message: "Username and email is Alredy exists" });
    } else if (userWithEmail) {
      return res.status(400).json({ message: "Email is Alredy exists" });
    } else if (userWithUsername) {
      return res.status(400).json({ message: "username is Alredy exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    const newUser = new User({
      username: username,
      email: email,
      password: hashPass,
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User create successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(400).json({ message: "Wrong username or password!" });
    }

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return res.status(400).json({ message: "Wrong username or password" });
    }

    res.status(200).json({ _id: user._id, username: user.username });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { createUser, loginUser };
