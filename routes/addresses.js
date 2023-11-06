const express = require('express');
const AddressController = require('../controllers/AddressController.js');
const {authentication} = require('../middlewares/authentication.js');
const router =  express.Router();

router.post('/', authentication, AddressController.create);
router.get('/', AddressController.findAll);
router.get('/', authentication, AddressController.findAllOfUser);

module.exports = router;