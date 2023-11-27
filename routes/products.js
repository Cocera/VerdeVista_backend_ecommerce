const express = require('express');
const { authentication } = require('../middlewares/authentication.js');
const { isAdmin, isSuperadmin } = require('../middlewares/isAdmin.js');
const ProductController = require('../controllers/ProductController.js');
const router =  express.Router();

router.get('/', ProductController.findAll);
router.get('/id/:id', authentication, ProductController.findOneById);
router.get('/name/:name', authentication, ProductController.findOneByName);
router.get('/price/:price', authentication, ProductController.findOneByPrice);
router.get('/price/asc', authentication, ProductController.sortByPrice);
router.post('/', authentication, isAdmin, ProductController.create);
router.put('/id/:id', authentication, isAdmin, ProductController.update);
router.delete('/id/:id', authentication, isSuperadmin, ProductController.delete);

module.exports = router;

