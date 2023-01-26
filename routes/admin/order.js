const express = require("express");
const {orderPageController,sendContactControler } = require("../../controllers/admin/order");

const router = express.Router();

// Middleware
function isUserAllowed(req, res, next) {
  sess = req.session;

  if (sess.user) {
    return next();
  } else {
    res.redirect("/auth/login");
  }
}

router.get("/", isUserAllowed, orderPageController);
router.post("/", sendContactControler);




module.exports = router;
