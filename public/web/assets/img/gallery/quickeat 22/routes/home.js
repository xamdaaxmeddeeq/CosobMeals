const express = require("express");
const { homeControles } = require("../controllers/home");

const router = express.Router();

router.get("/", homeControles);

module.exports = router;
