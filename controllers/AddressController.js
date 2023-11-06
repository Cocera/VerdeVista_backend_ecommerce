const {} = require('../models/address');

const AddressController = {
    create(req, res) {
        Address.create({...req.body, UserId: req.user.id})
        .then(address => res.status(201).send({message:'Address created', address}))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    },
    findAll(req, res) {
        Address.findAll()
        .then(address => res.status(200).send(address))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    },
    // Solo el usuario puede sacar todas sus direcciones
    findAllOfUser(req, res) {
        Address.findAll({
            where: {
                id: req.user.id
            }
        })
        .then(address => res.status(200).send(address))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    }
}

module.exports = AddressController;