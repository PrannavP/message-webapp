const express = require("express");
const UserController = require("../controllers/userController");

const router = express.Router();

// Route for user registration
router.post("/register", UserController.register);

// Route for user login
router.post("/login", UserController.login);

module.exports = router;