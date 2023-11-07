const express = require('express');
const { authentication } = require('../middlewares/authentication.js');
const { isAdmin, isSuperadmin } = require('../middlewares/isAdmin.js');
const UserController = require('../controllers/UserController.js');
const router = express.Router();

router.post('/', UserController.create);
router.get('/', authentication, UserController.findAll);
router.get('/id/:id', authentication, UserController.findOne);
router.put('/', authentication, UserController.update); 
router.put('/id/:id', authentication, isSuperadmin, UserController.updateAdmin);
router.delete('/id/:id', authentication, isAdmin, UserController.delete);
router.post('/login', UserController.login);
router.delete('/logout', authentication, UserController.logout);

module.exports = router;