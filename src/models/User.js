const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
