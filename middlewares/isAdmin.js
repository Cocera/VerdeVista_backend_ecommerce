const { Sequelize } = require('../models');

const isAdmin = async(req, res, next) => {
    const admins = ['admin', 'superadmin'];
    if (!admins.includes(req.user.role)) {
        return res.status(403).send({message: 'You do not have access permissions'});
    }
    next();
};

const isSuperadmin = async(req, res, next) => {
    const admins = ['superadmin'];
    if (!admins.includes(req.user.role)) {
        return res.status(403).send({message: 'You do not have access permissions'});
    }
    next();
};

module.exports = { isAdmin, isSuperadmin }