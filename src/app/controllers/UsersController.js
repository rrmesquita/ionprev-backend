const { User } = require("../models");

const UsersController = {
  async index(req, res) {
    await User.findAll()
      .then(users => res.json(users))
      .catch(error => res.status(500).send(error));
  }
};

module.exports = UsersController;
