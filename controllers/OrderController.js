const { Order, Product, OrderProduct } = require('../models/index.js');

const OrderController = {
    // PROBLEMAS CON EL DATA TYPE EN TOTAL PRICE
    async create(req, res) {
        try {
            const newOrder = await Order.create({ ...req.body, UserId: req.user.id });
            await order.addProduct(req.body.ProductId);
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
            const productFind = await User.findOne({where:{id:req.params.id}});
            if (!productFind) {
                res.status(400).send({message: `Order with id ${req.params.id} does not exist in the DB`});
            };
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
            const productFind = await User.findOne({where:{id:req.params.id}});
            if (!productFind) {
                res.status(400).send({message: `Order with id ${req.params.id} does not exist in the DB`});
            };
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

module.exports = OrderController;