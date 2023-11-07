const { Category, Product } = require('../models/index.js');

const CategoryController = {
    async create(req, res) {
        try {
            const category = await Category.create(req.body);
            res.status(201).send({message:`Category ${category.name} created wit id ${category.id}`});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        };
    },
    async findAll(req, res) {
        try {
            const categoriesAndProducts = await Category.findAll({
                include: [{model:Product, attributes: ['id', 'name', 'description']}]
            });
            res.status(200).send(categoriesAndProducts);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async findOneById(req, res) {
        try {
            const categoryById = await Category.findOne({
                where: {id: req.params.id},
                include: [{model:Product, attributes: ['id', 'name', 'description']}]
            });
            res.status(200).send(categoryById);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        };
    },
    async findOneByName(req, res) {
        try {
            const categoryByName = await Category.findOne({
                where: {name: req.params.name},
                include: [{model:Product, attributes: ['id', 'name', 'description']}]
            });
            res.status(200).send(categoryByName);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        };
    },
    async update(req, res) {
        try {
            const categoryUpdated = await Category.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send({message: `Category ${categoryUpdated.name} updated`, categoryUpdated});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            const deleteCategory = await Category.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send({message: `Category ${req.params.id} deleted`})
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        };
    }
};

module.exports = CategoryController;