const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "",
  database: "notebook_db",
  dialect: "postgres",
  host: "localhost",
  logging: false,
});

module.exports = db;
