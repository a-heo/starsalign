const { Op } = require('sequelize');
const Users = require('../model/user');

module.exports = {
  create: (req, res) => {
    console.log(req.body, 'create');
    Users.create(req.body)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  get: (req, res) => {
    Users.findOne({
      where: {
        userId: req.body.userId,
        password: req.body.password,
      },
      raw: true,
    })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        console.log('error retrieving user info', error);
        res.status(500).send(`error retrieving user ${error}`);
      });
  },

};

//need one for udpating user info