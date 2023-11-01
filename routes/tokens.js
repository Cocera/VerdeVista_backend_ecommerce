const express = require('express');
const router = express.Router();
const TokenController = require('../controllers/TokenController.js');

router.get("/", TokenController.findAll);

module.exports = router;