const { User } = require('../models/index.js');
const bcrypt = require('bcryptjs');

const UserController = {
    create(req, res) {
        req.body.role = "user";
        const password = bcrypt.hashSync(req.body.password,10);
        User.create({...req.body, password:password})
            .then(user => res.status(201).send({message:'User created', user}))
            .catch(err =>console.error(err));
    },
    findOne(req, res) {
        User.findOne({
            where: {
                id: req.params.id
            }})
            .then(user => res.status(200).send(user))
            .catch(err => console.error(err));
    },
    findAll(req, res) {
        User.findAll()
            .then(user => res.status(200).send({user}))
            .catch(err =>console.error(err));
    },
    login(req, res) {
        User.findOne({
            where:{
                mail: req.body.mail
            }
        }).then(user=>{
            if(!user){
                return res.status(400).send({message:"Incorrect username"})
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if(!isMatch){   
                return res.status(400).send({message:"Incorrect password"})
            }
            res.send({message:'Login done!', user})
        });
    },
    // NO FUNCIONA
    deleteOne(req, res) {
        User.destroy({
            where: {
                id: req.params.id
            }})
            .then(user => res.status(200).send({message:`User with id ${req.params.id} and username ${user.username} has been deleted`}))
            // .then(console.log(`User with id ${req.params.id} and username ${user.username} has been deleted`))
            .catch(err => console.error(err));
    }
};







module.exports = UserController;