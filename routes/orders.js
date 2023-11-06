const express = require('express');
const OrderController = require('../controllers/OrderController.js');
const {authentication} = require('../middlewares/authentication.js');
const router =  express.Router();


router.post('/', authentication, OrderController.create);
router.get('/', OrderController.findAll);
router.put('/id/:id', OrderController.update);
router.delete('/id/:id', OrderController.delete);

module.exports = router;