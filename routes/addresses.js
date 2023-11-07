const express = require('express');
const AddressController = require('../controllers/AddressController.js');
const {authentication} = require('../middlewares/authentication.js');
const router =  express.Router();

router.post('/', authentication, AddressController.create);
router.get('/', authentication, AddressController.findAll); // SOLO PUEDE ADMIN
router.get('/user', authentication, AddressController.allUserAddresses);
router.delete('/', AddressController.delete); // SOLO PUEDE ADMIN

module.exports = router;