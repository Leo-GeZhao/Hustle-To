const express = require("express");
const router = express.Router();

const usersCtrl = require("../../controllers/api/users");

const ensureLoggedIn = require("../../config/ensureLoggedIn");

//User SignUp
router.post("/", usersCtrl.create);

//User Login
router.post("/login", usersCtrl.login);

module.exports = router;
