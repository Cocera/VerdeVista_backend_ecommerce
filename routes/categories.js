const express = require('express');
const router =  express.Router();
const CategoryController = require('../controllers/CategoryController.js');

router.get('/', CategoryController.findAll);
router.get('/id/:id', CategoryController.findOneById);
router.put('/id/:id', CategoryController.update);
router.post('/', CategoryController.create);
router.delete('/id/:id', CategoryController.delete);

module.exports = router;