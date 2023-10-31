const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

router.post('/',UserController.create);
router.get('/', UserController.findAll);
router.get('/id/:id', UserController.findOne);
router.put('/id/:id', UserController.update);
router.post('/login', UserController.login);
router.delete('/id/:id', UserController.delete);

module.exports = router;