const express = require("express");
const controller = require("../controllers/controller");
const { auth } = require("../middlewares/auth");

const router = express.Router();

router.post("/create-message", auth, controller.createMessage);
router.get("/:channelId", auth, controller.getMessage);

module.exports = router;
