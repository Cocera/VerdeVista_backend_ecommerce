const { Order, Product, OrderProduct } = require('../models/index.js');

const OrderController = {
    // PROBLEMAS CON EL DATA TYPE EN TOTAL PRICE
    async create(req, res) {
        try {
            const newOrder = await Order.create({ ...req.body, UserId: req.user.id });
            const newOrderProcuts = await order.addProduct(req.body.ProductId);
            res.status(201).send({ message: 'Order created', newOrder });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async findAll(req, res) {
        try {
            const orders = await Order.findAll({
                include: [{ model: Product, attributes: ['name', 'price'], through: { attributes: [] } }],
            });
            res.status(200).send(orders);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            await Order.destroy({
                where: {
                    id: req.params.id
                }
            });
            await OrderProduct.destroy({
                where: {
                    ProductId: req.params.id
                }
            });
            res.status(200).send({ message: 'The order has been removed' });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            await Order.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const order = await Order.findByPk(req.params.id);
            await order.setProducts([req.body.ProductId]);
            res.status(200).send({ message: `Order with id ${req.params.id} updated`, order });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
};


// const OrderController = {
//     create(req, res) {
//         Order.create({...req.body, UserId: req.user.id})
//         .then(order => {
//             order.addProduct(req.body.ProductId);
//             res.status(201).send({message:'Order created', order});
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).send(err);
//         })
//     },
//     findAll(req, res) {
//         Order.findAll({
//             include: [{model:Product, attributes: ['name','price'], through: { attributes:[]}}],
//         })
//         .then(order => res.status(200).send(order))
//         .catch(err => {
//             console.error(err);
//             res.status(500).send(err);
//         });
//     },
//     delete(req, res) {
//         Order.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })
//         OrderProduct.destroy({
//             where: {
//                 ProductId: req.params.id
//             }
//         })
//         .then(res.status(200).send({ message: 'The order has been removed'}))
//         .catch(err => {
//             console.error(err);
//             res.status(500).send(err);
//         });
//     },
//     update(req, res) {
//         // -------------------- No funciona insertar productos
//         Order.update(req.body, {
//             where: {
//                 id: req.params.id
//             }
//         })
//         .then(order => {
//             order.setProducts([req.body.ProductId]);
//             res.status(200).send({message: `Order with id ${req.params.id} updated`, order});
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).send(err);
//         });
//     }
// };

module.exports = OrderController;