const express = require("express");
const {
  menuPageController,
  addFormControllers,
  deleteMenuController,
  addmenuControler,
  UpdatemenuFormController,
  UpdatemenuController, 
} = require("../../controllers/admin/menu");

const isUserAllowed = require("../../middlewares/isUserAllowed");

const router = express.Router();

router.get("/", isUserAllowed, menuPageController);
router.get("/addmenu", isUserAllowed, addFormControllers);
router.post("/", isUserAllowed, addmenuControler);
router.delete("/:id", isUserAllowed, deleteMenuController);

// updata
router.get("/updatemenu/:id", isUserAllowed, UpdatemenuFormController);
router.put("/:id", isUserAllowed, UpdatemenuController);

module.exports = router; 
