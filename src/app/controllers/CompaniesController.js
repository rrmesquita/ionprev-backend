const { Company } = require("../models");

const CompaniesController = {
  async index(req, res) {
    await Company.findAll()
      .then(Companies => res.json(Companies))
      .catch(error => res.status(500).send(error));
  }
};

module.exports = CompaniesController;
