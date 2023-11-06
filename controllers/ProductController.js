const { Product, Category } = require('../models/index.js');

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
        Product.findAll({
            include:  [{model:Category, attributes:['id', 'name', 'description']}]
        })
        .then(product => res.status(200).send(product))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    },
    findOneById(req, res) {
        Product.findOne({
            where: {id: req.params.id},
            include: [{model:Category, attributes:['id', 'name', 'description']}]
        })
        .then(product => res.status(200).send(product))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    },
    findOneByName(req, res) {
        Product.findOne({
            where: {name: req.params.name},
            include: [{model:Category, attributes:['id', 'name', 'description']}]
        })
        .then(product => res.status(200).send(product))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    },
    // ---------------- NO ENCUENTRA PRECIO CON DECIMAL; SOLO ENTERO
    findOneByPrice(req, res) {
        Product.findOne({
            where: {price: req.params.price},
            include: [{model:Category, attributes:['id', 'name', 'description']}]
        })
        .then(product => res.status(200).send({message: `Found product with price ${req.params.price}` ,product}))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    },
    sortByPrice(req, res) {
        Product.findAll({
            order: [
                ['price', 'ASC']
            ]
        })
        .then(product => res.status(200).send(product))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    },
    // añadir comprobar si id es existente
    delete(req, res) {
        Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(res.status(200).send({message: `Product with id ${req.params.id} deleted`}))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    },
    update(req, res) {
        Product.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(res.status(200).send({message: `Product with id ${req.params.id} updated`}))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    }
};

module.exports = ProductController;