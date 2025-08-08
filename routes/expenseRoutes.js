const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.get('/', expenseController.getHome);
router.post('/add', expenseController.addExpense);
router.post('/delete/:id', expenseController.deleteExpense);

module.exports = router;
