const { Category } = require('../models/index.js');

const CategoryController = {
    create(req, res) {
        Category.create(req.body)
            .then(category => res.status(201).send({message:'Category created', category}))
            .catch(err => {
                console.error(err);
                res.status(500).send(err);
            });
    },
    findAll(req, res) {
        Category.findAll()
            .then(category => res.status(200).send(category))
            .catch(err => {
                console.error(err);
                res.status(500).send(err);
            });
    },
    findOneById(req, res) {
        Category.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(category => res.status(200).send(category))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    },
    update(req, res) {
        Category.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        // "category" me devuelve solo el id, no el objeto entero
        .then(category => res.status(200).send({message: `Category with id ${req.params.id} updated`, category}))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    }
};

module.exports = CategoryController;