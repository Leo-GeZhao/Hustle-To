const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

require("dotenv").config();
require("./config/database");
require("./config/multer_S3");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// Routes
app.use("/api/users", require("./routes/api/users"));

//Admin Managing Sneakers
app.use("/api/sneakers", require("./routes/api/sneakers"));
app.use("/api/banners", require("./routes/api/banners"));

//Customer Page Getting Inventories
app.use("/api/inventories", require("./routes/api/inventories"));
app.use("/api/carts", require("./routes/api/carts"));
app.use("/api/checkouts", require("./routes/api/checkouts"));

// "Catch all" route
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
