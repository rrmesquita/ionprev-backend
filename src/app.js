const express = require("express");
const routes = require("./app/routes");

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use((req, res, next) => {
      const corsPort = process.env.WEB_PORT == 80 ? "" : `:${process.env.WEB_PORT}`;
      res.header("Access-Control-Allow-Origin", process.env.WEB_HOST + corsPort);
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Content-Disposition, Accept");
      res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
      next();
    });
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new AppController().express;
