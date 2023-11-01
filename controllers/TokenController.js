const { Token } = require('../models/index.js');

const TokenController = {
    findAll(req, res) {
        Token.findAll()
            .then(user => res.status(200).send({user}))
            .catch(err => console.error(err));
    }
};

module.exports = TokenController;