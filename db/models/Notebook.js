const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Notebook extends Model {}

Notebook.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db }
);

module.exports = Notebook;
