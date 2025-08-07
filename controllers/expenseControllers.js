const Expense = require('../models/Expense');

exports.getHome = async (req, res) => {
  const expenses = await Expense.find().sort({ date: -1 });
  res.render('index', { expenses });
};

exports.addExpense = async (req, res) => {
  const { title, amount, category } = req.body;
  const newExpense = new Expense({ title, amount, category });
  await newExpense.save();
  res.redirect('/');
};

exports.deleteExpense = async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
