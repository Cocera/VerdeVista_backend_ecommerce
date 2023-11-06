const { Order, Product, OrderProduct } = require('../models/index.js');

const OrderController = {
    create(req, res) {
        Order.create({...req.body, UserId: req.user.id})
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
    },
    update(req, res) {
        // -------------------- No funciona insertar productos
        Order.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(order => {
            order.setProducts([req.body.ProductId]);
            res.status(200).send({message: `Order with id ${req.params.id} updated`, order});
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
    }
    // update(req, res) {
        // -------------------- Solo me deja insertar un producto
    //     Order.findByPk(req.params.id)
    //     .then(orderFind => {
    //         if (orderFind) {
    //             orderFind.update(req.body)
    //             orderFind.setProducts([req.body.ProductId])
    //                 .then(updatedOrder => {
    //                     res.status(200).send({ message: `Order with id ${req.params.id} updated`, updatedOrder});
    //                 })
    //                 .catch(err => {
    //                     console.error(err);
    //                     res.status(500).send(err);
    //                 });
    //         } else {
    //             res.status(404).send({ message: 'Order not found' });
    //         }
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         res.status(500).send(err);
    //     });
    // }
};

module.exports = OrderController;