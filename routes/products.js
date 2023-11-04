const express = require('express');
const router =  express.Router();
const ProductController = require('../controllers/ProductController.js');

router.get('/', ProductController.findAll);
router.get('/id/:id', ProductController.findOneById);
router.get('/name/:name', ProductController.findOneByName);
router.get('/price/:price', ProductController.findOneByPrice);
router.post('/', ProductController.create);
router.put('/id/:id', ProductController.update);
router.delete('/id/:id', ProductController.delete);

module.exports = router;

