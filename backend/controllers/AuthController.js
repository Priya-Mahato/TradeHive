const { UsersModel } = require("../model/UsersModel");
const { createSecretToken } = require("../utils/SecretToken");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await UsersModel.create({ email, password, username });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user,
    });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Signup failed", error });
  }
};
