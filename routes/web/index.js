const express = require("express");
const { homeController } = require("../../controllers/web/index");

const router = express.Router();

router.get("/", homeController);

module.exports = router;
