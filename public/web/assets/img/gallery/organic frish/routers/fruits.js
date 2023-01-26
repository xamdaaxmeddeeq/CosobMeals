const express = require("express");
const {
  Addfruitform,
  getFruitsAllController,
  AddfruitsController,
  DeleteFruitController,
  UpdateFruitFormController,
  UpdateFruitController,
} = require("../controller/fruits");

const router = express.Router();

router.get("/", getFruitsAllController);
router.get("/Addfruit", Addfruitform);

router.post("/", AddfruitsController);
router.get("/updateForm/:id", UpdateFruitFormController);

router.put("/:id", UpdateFruitController);
router.delete("/:id", DeleteFruitController);

module.exports = router;
