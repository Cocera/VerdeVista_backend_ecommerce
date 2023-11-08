const { Product, Category } = require('../models/index.js');

const ProductController = {
    async create(req, res, next) {
        try {
            const product = await Product.create(req.body);
            res.status(201).send({ message: 'Product created', product });
        } catch (error) {
            console.error(error);
            next(error);
        }
    },

    async findAll(req, res) {
        try {
            const product = await Product.findAll({
                include: [{ model: Category, attributes: ['id', 'name', 'description'] }]
            });
            res.status(200).send(product);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async findOneById(req, res) {
        try {
            const productFind = await Product.findOne({where:{id:req.params.id}});
            if (!productFind) {
                res.status(400).send({message: `Product with id ${req.params.id} does not exist in the DB`});
            };
            const product = await Product.findOne({
                where: { id: req.params.id },
                include: [{ model: Category, attributes: ['id', 'name', 'description'] }]
            });
            res.status(200).send(product);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async findOneByName(req, res) {
        try {
            const productFind = await Product.findOne({where:{name:req.params.name}});
            if (!productFind) {
                res.status(400).send({message: `Product with name ${req.params.name} does not exist in the DB`});
            };
            const product = await Product.findOne({
                where: { name: req.params.name },
                include: [{ model: Category, attributes: ['id', 'name', 'description'] }]
            });
            res.status(200).send(product);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async findOneByPrice(req, res) {
        try {
            const productFind = await Product.findOne({where:{price:req.params.price}});
            if (!productFind) {
                res.status(400).send({message: `Product with price ${req.params.price} does not exist in the DB`});
            };
            const products = await Product.findOne({
                where: { price: req.params.price },
                include: [{ model: Category, attributes: ['id', 'name', 'description'] }]
            });
            res.status(200).send({ message: `Found product with price ${req.params.price}`, products });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async sortByPrice(req, res) {
        try {
            const productsAsc = await Product.findAll({
                order: [['price', 'ASC']]
            });
            res.status(200).send(productsAsc);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async delete(req, res) {
        try {
            const productFind = await Product.findOne({where:{id:req.params.id}});
            if (!productFind) {
                res.status(400).send({message: `Product with id ${req.params.id} does not exist in the DB`});
            };
            await Product.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send({ message: `Product with id ${req.params.id} deleted` });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async update(req, res) {
        try {
            const productFind = await Product.findOne({where:{id:req.params.id}});
            if (!productFind) {
                res.status(400).send({message: `Product with id ${req.params.id} does not exist in the DB`});
            };
            await Product.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send({ message: `Product with id ${req.params.id} updated` });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
};

module.exports = ProductController;