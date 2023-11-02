const express = require('express');
const router =  express.Router();
const CategoryController = require('../controllers/CategoryController.js');

router.get('/', CategoryController.findAll);
router.post('/', CategoryController.create);

module.exports = router;