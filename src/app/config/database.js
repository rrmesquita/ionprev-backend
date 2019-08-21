module.exports = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_NAME,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: "postgres",
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
