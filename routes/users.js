const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

router.post('/',UserController.create);
router.get('/', UserController.findAll);
router.get('/id/:id', UserController.findOne);
router.post('/login', UserController.login);
router.delete('/id/:id', UserController.deleteOne);

module.exports = router;