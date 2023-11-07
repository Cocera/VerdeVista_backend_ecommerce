const express = require('express');
const CategoryController = require('../controllers/CategoryController.js');
const {authentication} = require('../middlewares/authentication.js');
const router =  express.Router();

router.get('/', authentication, CategoryController.findAll);
router.get('/id/:id', authentication, CategoryController.findOneById);
router.get('/name/:name', authentication, CategoryController.findOneByName);
router.put('/id/:id', authentication, CategoryController.update); // SOLO PUEDE ADMIN
router.post('/', authentication, CategoryController.create); // SOLO PUEDE ADMIN
router.delete('/id/:id', authentication, CategoryController.delete); // SOLO PUEDE ADMIN

module.exports = router;