const Expense = require("../models/Expense");

// Add Expense
const addExpense = async (req, res) => {
  try {
    const expense = await Expense.create({
      user: req.user.id,
      amount: req.body.amount,
      category: req.body.category,
      description: req.body.description,
    });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addExpense, getExpenses };
