const Users = require('../model/user');

module.exports = {
  create: (req, res) => {
    Users.create(req.body)
      .then(result => {
          
      })
  },

}
