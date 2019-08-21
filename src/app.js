const express = require("express");

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
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Content-Disposition, Accept");
      res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
      next();
    });
  }

  routes() {
    this.express.get("/", (req, res) => res.send("Hello IonPrev!"));
  }
}

module.exports = new AppController().express;
