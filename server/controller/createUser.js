const Users = require('../model/user');

module.exports = {
  create: (req, res) => {
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
    })
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(`error retrieving user ${error}`);
      });
  },

};

//need one for udpating user info