const express = require("express");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const { isAdmin } = require("../middlewares/admin.middleware");
const {
  createUser,
  loginUser,
  getAllUsers,
} = require("../controllers/user.controller");

/* ROUTER */
const router = express.Router();

//sign up
router.post("/auth/register", createUser);

// login
router.post("/auth/login", loginUser);

//get all users
router.get("/", isAuthenticated, isAdmin, getAllUsers);

module.exports = router;
