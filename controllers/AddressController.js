const {Address} = require('../models/address');

const AddressController = {
    // La direccion creada se asocia automaticamente al usuario autentificado
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
    // Solo el usuario autentificado puede sacar todas sus direcciones
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
    // Solo el usuario puede borrar sus direcciones registradas
    async delete() {
        try {
            const deleteAddress = await Address.destroy();
            res.status().send({message: `Address deleted`, deleteAddress});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        };
    }
};

module.exports = AddressController;