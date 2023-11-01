const express = require('express');
const router = express.Router();
const TokenController = require('../controllers/TokenController.js');

router.get('/', TokenController.findAll);
router.get('/id/:id', TokenController.findUser);
router.get('/break/id/:id', TokenController.breakPermission);

module.exports = router;