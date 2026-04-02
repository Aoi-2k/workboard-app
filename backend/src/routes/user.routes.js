const express = require("express");
const router = express.Router();

const { getUser, postData } = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/user", getUser);
router.post("/data", postData);

router.get("/user", authMiddleware, getUser);

module.exports = router;