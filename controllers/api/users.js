const User = require("../../models/user");

//Create User
async function create(req, res, next) {
  try {
    const token = await User.createUser(req);
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

//Login User
async function login(req, res, next) {
  try {
    const token = await User.loginUser(req);
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json("Invalid Credentials");
  }
}

module.exports = {
  create,
  login,
};
