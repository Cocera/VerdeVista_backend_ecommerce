const express = require('express');
const {authentication} = require('../middlewares/authentication.js');
const PayMethodController = require('../controllers/PayMethodController.js');
const router = express.Router();

router.post('/', authentication, PayMethodController.create);
router.get('/', authentication, PayMethodController.findAll);

module.exports = router;