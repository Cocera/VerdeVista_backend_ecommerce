const express = require('express');
const { authentication } = require('../middlewares/authentication.js');
const { isAdmin, isSuperadmin } = require('../middlewares/isAdmin.js');
const TokenController = require('../controllers/TokenController.js');
const router = express.Router();

router.get('/', TokenController.findAll);
router.get('/id/:id', authentication, isAdmin, TokenController.findUser);
router.get('/break/id/:id', authentication, isSuperadmin, TokenController.breakPermission);

module.exports = router;