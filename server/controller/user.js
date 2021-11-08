const db = require("../database/index");
// const Users = require('../model/user');

module.exports = {
  create: (req, res) => {
    console.log(req.body, "create");
    db.User.create(req.body)
      .then((result) => {
        console.log("success creating account", result);
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  check: (req, res) => {
    db.User.findOne({
      where: {
        userId: req.body.userId,
        password: req.body.password,
      },
      raw: true,
    })
      .then((data) => {
        console.log(data, "login data via che2ck");
        res.status(200).send(data);
      })
      .catch((error) => {
        console.log("error retrieving user info", error);
        res.status(500).send(`error retrieving user ${error}`);
      });
  },
  get: (req, res) => {
    console.log(req.body, "inside get req");
    db.User.findOne({
      where: {
        userId: req.body.userId,
      },
      raw: true,
    })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send(`error getting user info ${error}`);
      });
  },
};

// need one for udpating user info
