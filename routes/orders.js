const express = require('express');
const OrderController = require('../controllers/OrderController.js');
const {authentication} = require('../middlewares/authentication.js');
const router =  express.Router();


router.post('/', authentication, OrderController.create);
router.get('/', authentication, OrderController.findAll);
router.put('/id/:id', authentication, OrderController.update); // ADMIN
router.delete('/id/:id', authentication, OrderController.delete); // ADMIN

module.exports = router;