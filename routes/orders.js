const express = require('express');
const { authentication } = require('../middlewares/authentication.js');
const { isAdmin, isSuperadmin } = require('../middlewares/isAdmin.js');
const OrderController = require('../controllers/OrderController.js');
const router =  express.Router();

router.post('/', authentication, OrderController.create);
router.get('/', authentication, isAdmin, OrderController.findAll);
router.put('/id/:id', authentication, isAdmin, OrderController.update); 
router.delete('/id/:id', authentication, isSuperadmin, OrderController.delete); 

module.exports = router;