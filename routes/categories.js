const express = require('express');
const { authentication } = require('../middlewares/authentication.js');
const { isAdmin, isSuperadmin } = require('../middlewares/isAdmin.js');
const CategoryController = require('../controllers/CategoryController.js');
const router =  express.Router();

router.get('/', authentication, CategoryController.findAll);
router.get('/id/:id', authentication, CategoryController.findOneById);
router.get('/name/:name', authentication, CategoryController.findOneByName);
router.put('/id/:id', authentication, isAdmin, CategoryController.update); 
router.post('/', authentication, isAdmin, CategoryController.create); 
router.delete('/id/:id', authentication, isSuperadmin, CategoryController.delete); 

module.exports = router;