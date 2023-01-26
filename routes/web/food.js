const express = require("express");
const {
  menuController,
  galleryController,
  speacialController,
  bookOrderController,
  singleFoodPageController,
} = require("../../controllers/web/food");

const router = express.Router();

router.get("/", menuController);
router.get("/gallery", galleryController);
router.get("/specials", speacialController);

router.get("/:id", singleFoodPageController);

module.exports = router;
