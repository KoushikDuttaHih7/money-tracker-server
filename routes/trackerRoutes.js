const express = require("express");
const router = express.Router();
const { transaction } = require("../controllers/trackerController");

router.post("/transaction", transaction);

module.exports = router;
