const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    datetime: {
      type: String,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
