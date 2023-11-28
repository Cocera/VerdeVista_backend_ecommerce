const { User, Token, Order, Address, PayMethod, Product, Sequelize } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development'];
const { Op } = Sequelize;

const UserController = {
    async create(req, res, next) {
      req.body.role = "user";
      const password = bcrypt.hashSync(req.body.password, 10);
      try {
        const user = await User.create({ ...req.body, password: password });
        res.status(201).send({ message: 'User created', user });
      } catch (err) {
        console.error(err);
        next(error);
      };
    },
  
    async findOne(req, res) {
      try {
        const userFind = await User.findOne({where:{id:req.params.id}});
        if (!userFind) {
          res.status(400).send({message: `User with id ${req.params.id} does not exist in the DB`});
        };
        const user = await User.findOne({
          where: { id: req.params.id },
          include: [
            {
              model: Order,
              attributes: ['id', 'total_price'],
              include: [
                {
                  model: Product,
                  attributes: ['name', 'price'],
                  through: { attributes: [] },
                },
                {
                  model: Address,
                  attributes: ['address_line1', 'city', 'postal_code', 'country'],
                },
                {
                  model: PayMethod,
                  attributes: ['payment_type', 'account_num', 'expiry'],
                },
              ],
            },
          ],
        });
        res.status(200).send(user);
      } catch (err) {
        console.error(err);
      }
    },
  
    async findAll(req, res) {
      try {
        const users = await User.findAll();
        res.status(200).send({ users });
      } catch (err) {
        console.error(err);
      }
    },
  
    async update(req, res) {
      try {
        await User.update(req.body, {
          where: {
            id: req.user.id,
          },
        });
        res.status(200).send({ message: `User ${req.body.name} updated successfully.`});
      } catch (err) {
        console.error(err);
      }
    },

    async updateAdmin(req, res) {
      try {
        const userFind = await User.findOne({where:{id:req.params.id}});
        if (!userFind) {
          res.status(400).send({message: `User with id ${req.params.id} does not exist in the DB`});
        };
        const userUpdated = await User.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
        console.log(userUpdated);
        res.status(200).send({ message: `User with id ${req.params.id} updated`});
      } catch (err) {
        console.error(err);
      }
    },
  
    async delete(req, res) {
      try {
        const userFind = await User.findOne({where:{id:req.params.id}});
        if (!userFind) {
          res.status(400).send({message: `User with id ${req.params.id} does not exist in the DB`});
        };
        await User.destroy({
          where: {
            id: req.params.id,
          },
        });
        res.status(200).send(`User with id ${req.params.id} has been deleted`);
        await Token.update({ permission: false }, {
          where: {
            UserId: req.params.id,
          },
        });
      } catch (err) {
        console.error(err);
      }
    },
  
    async login(req, res) {
      try {
        const user = await User.findOne({
          where: {
            email: req.body.email,
          },
        });
  
        if (!user) {
          return res.status(400).send({ message: "Incorrect username" });
        }
  
        const isMatch = bcrypt.compareSync(req.body.password, user.password);
        if (!isMatch) {
          return res.status(400).send({ message: "Incorrect password" });
        }
  
        const token = jwt.sign({ id: user.id }, jwt_secret);
        await Token.create({ token, UserId: user.id, permission: true });
        res.send({ message: 'Welcome ' + user.username, user, token });
      } catch (err) {
        console.error(err);
      }
    },

    async logout(req, res) {
      try {
        await Token.destroy({
          where: {
            [Op.and]: [
              { UserId: req.user.id },
              { token: req.headers.authorization },
            ],
          },
        });
        res.send({ message:"Successfully logged out"});
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .send({ message:"Ups! There was a problem trying to disconnect you"});
      }
    },

  };



module.exports = UserController;