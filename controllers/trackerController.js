const TransactionModel = require("../models/trackerModel");

exports.transaction = async (req, res) => {
  const { name, price, description, datetime } = req.body;

  const transaction = await TransactionModel.create({
    name,
    price,
    description,
    datetime,
  });

  res.json(transaction);
};

exports.getTransactions = async (req, res) => {
  const transactions = await TransactionModel.find();
  res.json(transactions);
};
