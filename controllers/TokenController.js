const { Token } = require('../models/index.js');

const TokenController = {
    async findAll(req, res) {
        try {
            const user = await Token.findAll();
            res.status(200).send({ user });
        } catch (err) {
            console.error(err);
        }
    },

    async findUser(req, res) {
        try {
            const user = await Token.findAll({
                where: {
                    UserId: req.params.id
                }
            });
            res.status(200).send({ user });
        } catch (err) {
            console.error(err);
        }
    },

    async breakPermission(req, res) {
        // Si el id no coincide con nuestra db de users, devolver error concreto
        try {
            const user = await Token.update(
                { permission: false },
                { where: { UserId: req.params.id }
            });

            res.status(200).send({ message: 'Permission updated successfully', user });
        } catch (err) {
            console.error(err);
        }
    }
};


// const TokenController = {
//     findAll(req, res) {
//         Token.findAll()
//             .then(user => res.status(200).send({user}))
//             .catch(err => console.error(err));
//     },
//     findUser(req, res) {
//         Token.findAll({
//             where: {
//                 UserId: req.params.id
//             }})
//             .then(user => res.status(200).send({user}))
//             .catch(err => console.error(err));
//     },
//     breakPermission(req, res) {
//         // Si el id no coincide con nuestra db de users, devolver error concreto
//         Token.update(
//             { permission: false },
//             { where: {UserId: req.params.id}})
//             .then(user => res.status(200).send({message:'Permission updated successfully', user})) // user devuelve solo '1'
//             .catch(err => console.error(err));
//     }
// };

module.exports = TokenController;