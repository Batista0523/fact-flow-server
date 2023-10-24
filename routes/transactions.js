const express = require("express");
const router = express.Router();
const transactionsController = require('../controllers/transactionsControllers');

router.get('/', transactionsController.getAlltransactions);
router.get('/:id', transactionsController.getTransactionsById);
router.post('/', transactionsController.createTransaction);
router.put('/:id', transactionsController.updateTransaction);
router.delete('/:id', transactionsController.deleteTransaction);

module.exports = router;