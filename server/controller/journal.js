const db = require('../database/index');

module.exports = {
  create: (req, res) => {
    console.log(req.body, req.params.id, 'via journal create');
    db.Journal.create({
      userCode: req.params.id,
      title: req.body.title,
      entry: req.body.entry,
      feelings: req.body.feelings,
    })
      .then((result) => res.send(result))
      .catch((error) => console.log(error, 'error in journal create'));
  },
  get: (req, res) => {
    db.Journal.findAll({
      where: {
        userCode: req.params.id,
      },
    })
      .then((result) => res.send(result))
      .catch((error) => console.log(error, 'error in retrieving journal'));
  },
  delete: (req, res) => {
    console.log(req.params, 'inside delete function');
    db.Journal.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.sendStatus(200))
      .catch((error) => console.log(error, 'error in deleting info'));
  },
};