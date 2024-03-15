const express = require("express");
const { responseWith } = require("../middlewares/responseWith");
const CardPayment = require("./v1/card-payment");

const router = express.Router();

router.post("/card-payment", (req, res, next) =>
  responseWith(req, res, next, CardPayment)
);

module.exports.v1 = router;
