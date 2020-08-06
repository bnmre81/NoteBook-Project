const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Note extends Model {}

Note.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db }
);

module.exports = Note;
