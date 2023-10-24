const transactions = require("../models/transactionModels");

const getAlltransactions = (req, res) => {
  res.json({ transactions });
};

const getTransactionsById = (req, res) => {
  const { id } = req.params;
  const transaction = transactions.find((trans) => trans.id === id);

  if (!transaction) {
    return res.status(404).json({ message: "Transaction not found" });
  }

  res.json({ transaction });
};

const createTransaction = (req, res) => {
  const { item_name, amount, spends, from, date, category } = req.body;
  const id = String(transactions.length + 1);
  const newTransaction = {
    id,
    item_name,
    amount,
    spends,
    from,
    category,
    date,
  };
  transactions.push(newTransaction);
  res.json({
    message: "Transaction created successfully",
    transactions: newTransaction,
  });
};

const updateTransaction = (req, res) => {
  const { id } = req.params;
  const { item_name, amount, spends, from, date, category } = req.body;
  const transactionIndex = transactions.findIndex((trans) => trans.id === id);

  if (transactionIndex === -1) {
    return res.status(404).json({ message: "Transaction not found" });
  }

  const updatedtransaction = {
    ...transactions[transactionIndex],
    item_name,
    date,
    from,
    category,
    spends,
    amount,
  };
  transactions[transactionIndex] = updatedtransaction;

  res.json({
    message: "Transaction updated completed",
    transactions: updatedtransaction,
  });
};

const deleteTransaction = (req, res) => {
  const { id } = req.params;
  const transactionIndex = transactions.findIndex((trans) => trans.id === id);

  if (transactionIndex === -1) {
    return res.status(404).json({ message: "Transaction not found" });
  }

  const deletedTransaction = transactions.splice(transactionIndex, 1);
  res.json({
    message: "Transacation Deleted",
    transactions: deletedTransaction,
  });
};

module.exports = {
  getAlltransactions,
  getTransactionsById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
