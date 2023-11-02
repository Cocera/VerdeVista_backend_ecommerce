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
    }
};

module.exports = CategoryController;