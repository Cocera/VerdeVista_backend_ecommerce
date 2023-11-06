const {PayMethod} = require('../models/index');

const PayMethodController = {
    create(req, res) {
        PayMethod.create({...req.body, UserId: req.user.id})
        .then(payMethod => res.status(201).send({message:'Pay method created', payMethod}))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    },
    findAll(req, res) {
        PayMethod.findAll()
        .then(payMethod => res.status(200).send(payMethod))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    }
};

module.exports = PayMethodController;