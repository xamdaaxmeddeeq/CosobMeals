const express = require("express");
const {
 
    orderFormController
} = require("../../controllers/web/order");

const router = express.Router();
router.get("/", orderFormController);


module.exports = router;
