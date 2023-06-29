const TransactionModel = require("../models/trackerModel");

exports.transaction = async (req, res) => {
  const { name, price, description, datetime } = req.body;

  const date = datetime.split("T")[0];
  const time = datetime.split("T")[1];

  const transaction = await TransactionModel.create({
    name,
    price,
    description,
    datetime: date + "," + time,
  });

  res.json(transaction);
};

exports.getTransactions = async (req, res) => {
  const transactions = await TransactionModel.find();
  res.json(transactions);
};
