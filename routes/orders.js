const express = require('express');
const router =  express.Router();
const OrderController = require('../controllers/OrderController.js');

router.post('/', OrderController.create);
router.get('/', OrderController.findAll);

module.exports = router;