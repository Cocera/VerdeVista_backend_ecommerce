const { Order, Product } = require('../models/index.js');

const OrderController = {
    create(req, res) {
        Order.create(req.body)
        .then(order => {
            order.addProduct(req.body.ProductId);
            res.status(201).send({message:'Order created', order});
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        })
    },
    findAll(req, res) {
        Order.findAll({
            include: [{model:Product, attributes: ['name','price'], through: { attributes:[]}}],
        })
        .then(order => res.status(200).send(order))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    }
};

module.exports = OrderController;