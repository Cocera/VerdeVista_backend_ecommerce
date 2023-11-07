const { User, Token, Order, Address, PayMethod, Product } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  // importamos la dependencia
const { jwt_secret } = require('../config/config.json')['development'];  // importamos el secreto, ruta mas dentro de development

const UserController = {
    async create(req, res) {
      req.body.role = "user";
      const password = bcrypt.hashSync(req.body.password, 10);
      try {
        const user = await User.create({ ...req.body, password: password });
        res.status(201).send({ message: 'User created', user });
      } catch (err) {
        console.error(err);
        res.status(500).send(err);
      }
    },
  
    async findOne(req, res) {
      try {
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
            id: req.params.id,
          },
        });
        // Este user me devuelve solo el id
        res.status(201).send({ message: "Usuario actualizado con éxito", user });
      } catch (err) {
        console.error(err);
      }
    },
  
    async delete(req, res) {
      try {
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
            mail: req.body.mail,
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
  };
  

// const UserController = {
//     create(req, res) {
//         req.body.role = "user";
//         const password = bcrypt.hashSync(req.body.password,10);
//         User.create({...req.body, password:password})
//             .then(user => res.status(201).send({message:'User created', user}))
//             .catch(err => {
//                 console.error(err);
//                 res.status(500).send(err);
//             });
//     },
//     findOne(req, res) {
//         User.findOne({
//             where: {id: req.params.id},
//             include: [{model: Order, attributes: ['id', 'total_price'],
//                 include: [
//                     {model: Product, attributes: ['name', 'price'], through: { attributes:[]}},
//                     {model: Address, attributes: ['address_line1', 'city', 'postal_code', 'country']},
//                     {model: PayMethod, attributes: ['payment_type', 'account_num', 'expiry']}
//             ]}]
//         })
//             .then(user => res.status(200).send(user))
//             .catch(err => console.error(err));
//     },
//     findAll(req, res) {
//         User.findAll()
//             .then(user => res.status(200).send({user}))
//             .catch(err =>console.error(err));
//     },
//     update(req, res) {
//         // Faltaria hacer bien el update de la contraseña. codificarla
//         User.update(req.body, {
//           where: {
//             id: req.params.id,
//           },
//         })
//         .then(user => res.status(201).send({message:"Usuario actualizado con éxito", user}))
//         .catch(err => console.error(err));
//     },
//     delete(req, res) {
//         User.destroy({
//             where: {
//                 id: req.params.id
//             }})
//             .then(()=>{
//                 res.status(200).send(`User with id ${req.params.id} has been deleted`)
//                 Token.update({permission: false}, {
//                     where: {
//                       UserId: req.params.id
//                     },
//                 })
//             })
//             .catch(err => console.error(err));
//     },
//     login(req, res) {
//         User.findOne({
//             where:{
//                 mail: req.body.mail
//             }
//         }).then(user=>{
//             if(!user){
//                 return res.status(400).send({message:"Incorrect username"})
//             };
//             const isMatch = bcrypt.compareSync(req.body.password, user.password);
//             if(!isMatch){   
//                 return res.status(400).send({message:"Incorrect password"})
//             };
//             const token = jwt.sign({id: user.id}, jwt_secret);
//             Token.create({token, UserId: user.id, permission:true});
//             res.send({message:'Welcome '+ user.username, user, token})
//         });
//     }
// };







module.exports = UserController;