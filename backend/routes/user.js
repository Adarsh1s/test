const express = require("express");
const router = express.Router();
const { syncClerkUser } = require("../controllers/userController");
const { requireAuth } = require("../middleware/auth");

router.post("/sync-user", requireAuth, syncClerkUser);

module.exports = router;

