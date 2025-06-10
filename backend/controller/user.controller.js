const { UsersModel } = require("../model/UsersModel.js");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

// POST /login
const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Please provide both username and password" });
    }

    try {
        const user = await UsersModel.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found" }); // 404 Not Found
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid username or password" }); // 401 Unauthorized
        }

        const token = crypto.randomBytes(20).toString("hex");
        user.token = token;
        await user.save();

        return res.status(200).json({ token }); // 200 OK
    } catch (e) {
        return res.status(500).json({ message: `Something went wrong: ${e.message}` }); // 500 Internal Server Error
    }
};

// POST /register
const register = async (req, res) => {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
        return res.status(400).json({ message: "All fields are required" }); // 400 Bad Request
    }

    try {
        const existingUser = await UsersModel.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" }); // 409 Conflict
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UsersModel({
            name,
            username,
            password: hashedPassword
        });

        await newUser.save();

        return res.status(201).json({ message: "User registered successfully" }); // 201 Created
    } catch (e) {
        return res.status(500).json({ message: `Something went wrong: ${e.message}` }); // 500 Internal Server Error
    }
};

module.exports = { login, register };