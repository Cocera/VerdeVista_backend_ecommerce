const { Product, Category } = require('../models/index.js');

const ProductController = {
    async create(req, res) {
        try {
            const product = await Product.create(req.body);
            res.status(201).send({ message: 'Product created', product });
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },

    async findAll(req, res) {
        try {
            const product = await Product.findAll({
                include: [{ model: Category, attributes: ['id', 'name', 'description'] }]
            });
            res.status(200).send(product);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },

    async findOneById(req, res) {
        try {
            const product = await Product.findOne({
                where: { id: req.params.id },
                include: [{ model: Category, attributes: ['id', 'name', 'description'] }]
            });
            res.status(200).send(product);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },

    async findOneByName(req, res) {
        try {
            const product = await Product.findOne({
                where: { name: req.params.name },
                include: [{ model: Category, attributes: ['id', 'name', 'description'] }]
            });
            res.status(200).send(product);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },

    // ---------------------------------------------- NO ENCUENTRA PRECIO CON DECIMAL; SOLO ENTERO
    // ---------------------------------------------- OPCION A SABER CUANTOS PRODUCTOS HAY CON ESE PRECIO

    async findOneByPrice(req, res) {
        try {
            const products = await Product.findOne({
                where: { price: req.params.price },
                include: [{ model: Category, attributes: ['id', 'name', 'description'] }]
            });
            res.status(200).send({ message: `Found product with price ${req.params.price}`, products });
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },
    // ---------------------------------------------- NO VA
    async sortByPrice(req, res) {
        try {
            const productsAsc = await Product.findAll({
                order: [['price', 'ASC']]
            });
            res.status(200).send(productsAsc);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },

    async delete(req, res) {
        try {
            await Product.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send({ message: `Product with id ${req.params.id} deleted` });
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },

    async update(req, res) {
        try {
            await Product.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send({ message: `Product with id ${req.params.id} updated` });
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
};


// const ProductController = {
//     create(req, res) {
//         Product.create(req.body)
//         .then(product => res.status(201).send({message:'Product created', product}))
//         .catch(err => {
//             console.error(err);
//             res.status(500).send(err);
//         });  
//     },
//     findAll(req, res) {
//         Product.findAll({
//             include:  [{model:Category, attributes:['id', 'name', 'description']}]
//         })
//         .then(product => res.status(200).send(product))
//         .catch(err => {
//             console.error(err);
//             res.status(500).send(err);
//         });
//     },
//     findOneById(req, res) {
//         Product.findOne({
//             where: {id: req.params.id},
//             include: [{model:Category, attributes:['id', 'name', 'description']}]
//         })
//         .then(product => res.status(200).send(product))
//         .catch(err => {
//             console.error(err);
//             res.status(500).send(err);
//         });
//     },
//     findOneByName(req, res) {
//         Product.findOne({
//             where: {name: req.params.name},
//             include: [{model:Category, attributes:['id', 'name', 'description']}]
//         })
//         .then(product => res.status(200).send(product))
//         .catch(err => {
//             console.error(err);
//             res.status(500).send(err);
//         });
//     },
//     // ---------------------------------------------- NO ENCUENTRA PRECIO CON DECIMAL; SOLO ENTERO
//     // ---------------------------------------------- OPCION A SABER CUANTOS PRODUCTOS HAY CON ESE PRECIO
//     findOneByPrice(req, res) {
//         Product.findOne({
//             where: {price: req.params.price},
//             include: [{model:Category, attributes:['id', 'name', 'description']}]
//         })
//         .then(products => res.status(200).send({message: `Found product with price ${req.params.price}`, products}))
//         .catch(err => {
//             console.error(err);
//             res.status(500).send(err);
//         });
//     },
//     // ---------------------------------------------- NO VA
//     sortByPrice(req, res) {
//         Product.findAll({
//             order: [['price', 'ASC']]
//         })
//         .then(products => res.status(200).send(products))
//         .catch(err => {
//             console.error(err);
//             res.status(500).send(err);
//         });
//     },
//     // añadir comprobar si id es existente
//     delete(req, res) {
//         Product.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })
//         .then(res.status(200).send({message: `Product with id ${req.params.id} deleted`}))
//         .catch(err => {
//             console.error(err);
//             res.status(500).send(err);
//         });
//     },
//     update(req, res) {
//         Product.update(req.body, {
//             where: {
//                 id: req.params.id
//             }
//         })
//         .then(res.status(200).send({message: `Product with id ${req.params.id} updated`}))
//         .catch(err => {
//             console.error(err);
//             res.status(500).send(err);
//         });
//     }
// };

module.exports = ProductController;