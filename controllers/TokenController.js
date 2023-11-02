const { Token } = require('../models/index.js');

const TokenController = {
    findAll(req, res) {
        Token.findAll()
            .then(user => res.status(200).send({user}))
            .catch(err => console.error(err));
    },
    findUser(req, res) {
        Token.findAll({
            where: {
                UserId: req.params.id
            }})
            .then(user => res.status(200).send({user}))
            .catch(err => console.error(err));
    },
    breakPermission(req, res) {
        // Si el id no coincide con nuestra db de users, devolver error concreto
        Token.update(
            { permission: false },
            { where: {UserId: req.params.id}})
            .then(user => res.status(200).send({message:'Permission updated successfully', user})) // user devuelve solo '1'
            .catch(err => console.error(err));
    }
};

module.exports = TokenController;