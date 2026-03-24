const express = require("express");
const router = express.Router();

const {
  getUser,
  postData,
} = require("../controllers/user.controller");

// define routes
router.get("/user", getUser);
router.post("/data", postData);

module.exports = router;