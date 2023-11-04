const {PayMethod} = require('../models/index');

const PayMethodController = {
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