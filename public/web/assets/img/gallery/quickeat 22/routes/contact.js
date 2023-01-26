const express = require("express");
const { contactControler } = require("../controllers/contact");

router = express.Router();

router.get("/", contactControler);

module.exports = router;
