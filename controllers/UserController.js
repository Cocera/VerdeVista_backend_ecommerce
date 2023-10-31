const { User } = require('../models/index.js');

const UserController = {
    create(req, res) {
        req.body.role = "user";
        User.create(req.body)
            .then(user => res.status(201).send({message:'User created', user}))
            .catch(err =>console.error(err));
    },
    findAll(req, res) {
        User.findAll()
            .then(user => res.status(200).send({user}))
            .catch(err =>console.error(err));
    }
};







module.exports = UserController;