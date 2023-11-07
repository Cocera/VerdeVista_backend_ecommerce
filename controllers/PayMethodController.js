const {PayMethod} = require('../models/index');

const PayMethodController = {
    async create(req, res) {
        try {
            const newPayMethod = await PayMethod.create({...req.body, UserId: req.user.id});
            res.status(201).send({message: 'New pay method created', newPayMethod});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        };
    },
    async findAll(req, res) {
        try {
            const payMethods = await PayMethod.findAll();
            res.status(200).send(payMethods);
        } catch (error) {
            console.error(error);
            res.status(500).send(error); 
        };
    }
};

module.exports = PayMethodController;