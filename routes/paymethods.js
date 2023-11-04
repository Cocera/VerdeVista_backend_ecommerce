const express = require('express');
const router = express.Router();
const PayMethodController = require('../controllers/PayMethodController.js');

router.get('/', PayMethodController.findAll);

module.exports = router;