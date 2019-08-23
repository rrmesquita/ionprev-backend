const routes = require("express").Router();

const CompaniesController = require("./controllers/CompaniesController");
const UsersController = require("./controllers/UsersController");
const UsageController = require("./controllers/UsageController");

routes.get("/user", UsersController.index);
routes.get("/company", CompaniesController.index);
routes.post("/usage/upload", UsageController.parseFiles);

module.exports = routes;
