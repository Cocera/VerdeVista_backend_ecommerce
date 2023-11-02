const { Product } = require('../models/index.js');

const ProductController = {
    create(req, res) {
        Product.create(req.body)
        .then(product => res.status(201).send({message:'Product created', product}))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });  
    },
    findAll(req, res) {
        Product.findAll()
        .then(product => res.status(201).send(product))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    }
};

module.exports = ProductController;