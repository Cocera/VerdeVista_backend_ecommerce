const express = require('express');
const { authentication } = require('../middlewares/authentication.js');
const { isAdmin, isSuperadmin } = require('../middlewares/isAdmin.js');
const AddressController = require('../controllers/AddressController.js');
const router =  express.Router();

router.post('/', authentication, AddressController.create);
router.get('/', authentication, isAdmin, AddressController.findAll); 
router.get('/user', authentication, AddressController.allUserAddresses);
router.delete('/id/:id', authentication, isSuperadmin, AddressController.delete); 

module.exports = router;