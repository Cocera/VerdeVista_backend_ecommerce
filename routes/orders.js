const express = require('express');
const router =  express.Router();
const OrderController = require('../controllers/OrderController.js');

router.post('/', OrderController.create);
router.get('/', OrderController.findAll);
router.put('/id/:id', OrderController.update);
router.delete('/id/:id', OrderController.delete);

module.exports = router;