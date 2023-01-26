
const isUserAllowed = require("../../middlewares/isUserAllowed")
const express = require("express");
const {
 contactPageController,contactUsControler,
} = require("../../controllers/admin/contacts");

const router = express.Router();




router.get("/", isUserAllowed,contactPageController );
router.post("/",  contactUsControler);
// router.post("/", isUserAllowed, adduserControler);

module.exports = router;
