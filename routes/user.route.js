const express = require("express");
const { createUser, loginUser } = require("../controllers/user.controller");

/* ROUTER */
const router = express.Router();

//sign up
router.post("/auth/signup", createUser);

// login
router.post("/auth/login", loginUser);

module.exports = router;
