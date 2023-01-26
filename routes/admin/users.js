const express = require("express");
const {
  usersPageController,
  addFormControllers,
  adduserControler,
  deleteUserController,
  UpdateUSerController,
  UpdateUserFormController,
} = require("../../controllers/admin/users");
const isUserAllowed = require("../../middlewares/isUserAllowed")

const router = express.Router();

router.get("/", isUserAllowed, usersPageController);
router.get("/userform", isUserAllowed, addFormControllers);
router.post("/", isUserAllowed, adduserControler);
router.delete("/:id", isUserAllowed, deleteUserController);

// updata
router.get("/update/:id", isUserAllowed, UpdateUserFormController);
router.put("/:id", isUserAllowed, UpdateUSerController);

module.exports = router;
