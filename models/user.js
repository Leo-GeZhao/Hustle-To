const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SALT_ROUNDS = 6;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

//Create User
userSchema.statics.createUser = async function (req) {
  const { name, email, password } = req.body;
  const hanshedPassword = await bcrypt.hash(password, parseInt(SALT_ROUNDS));
  const user = await this.create({
    name,
    email,
    password: hanshedPassword,
  });
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
};

//Login User
userSchema.statics.loginUser = async function (req) {
  const { email, password } = req.body;
  const user = await this.findOne({ email });
  if (!(await bcrypt.compare(password, user.password)))
    throw new Error("Invalid Password");
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
};

module.exports = mongoose.model("User", userSchema);
