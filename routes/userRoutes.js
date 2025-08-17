const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { ensureAuthenticated } = require("../middleware/authMiddleware");

router.get("/", ensureAuthenticated, userController.showHome);

module.exports = router;
