const express = require("express");
const { eventtController } = require("../../controllers/web/events");

const router = express.Router();

router.get("/", eventtController);

module.exports = router;
