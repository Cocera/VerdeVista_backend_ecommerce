const {Address} = require('../models/address');

const AddressController = {
    async create(req, res) {
        try {
            const address = await Address.create({...req.body, UserId: req.user.id});
            res.status(201).send({message:'Address created', address});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        };
    },

    async findAll(req, res) {
        try {
            const allAddresses = await Address.findAll();
            res.status(200).send(allAddresses);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        };
    },

    async allUserAddresses(req, res) {
        try {
            const userAddresses = await Address.findAll({
                where: {
                    UserId: req.user.id
                }
            });
            res.status(200).send({message:`Addresses of user with ${req.user.id}`, userAddresses});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        };
    },
    
    async delete(req, res) {
        try {
            const deleteAddress = await Address.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status().send({message: `Address deleted`, deleteAddress});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        };
    }
};

module.exports = AddressController;