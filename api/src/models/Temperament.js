const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "temperament", //va a tener un id numerico y autoincremental que postgres le asigna por default
    {
      name: { 
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  ); 
};