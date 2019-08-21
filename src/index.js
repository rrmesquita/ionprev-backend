const dotenv = require("dotenv").config();
const app = require("./app");

if (dotenv.error) throw dotenv.error;

app.listen(process.env.API_PORT);
