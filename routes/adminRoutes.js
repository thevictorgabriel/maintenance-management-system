const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { ensureAuthenticated, ensureAdmin } = require("../middleware/authMiddleware");

router.get("/", ensureAuthenticated, ensureAdmin, adminController.showAdminDashboard);

module.exports = router;
