const { Order, Product, OrderProduct } = require('../models/index.js');

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
    },
    delete(req, res) {
        Order.destroy({
            where: {
                id: req.params.id
            }
        })
        OrderProduct.destroy({
            where: {
                ProductId: req.params.id
            }
        })
        .then(res.status(200).send({ message: 'The order has been removed'}))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    }
};

module.exports = OrderController;