const express = require('express');
const router = express.Router();
const controller = require('../controllers/expenseController');

router.get('/', controller.getHome);
router.post('/add', controller.addExpense);
router.get('/delete/:id', controller.deleteExpense);

module.exports = router;
