const express = require("express");
const { contactController } = require("../../controllers/web/contact");

const router = express.Router();

router.get("/", contactController);

module.exports = router;
