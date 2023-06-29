const express = require("express");
const router = express.Router();
const {
  transaction,
  getTransactions,
} = require("../controllers/trackerController");

router.post("/transaction", transaction);
router.get("/transactions", getTransactions);

module.exports = router;
