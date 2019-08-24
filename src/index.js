const dotenv = require("dotenv").config();
const app = require("./app");

if (process.env.NODE_ENV !== "production" && dotenv.error) throw dotenv.error;

app.listen(process.env.PORT || 3000);
