const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'users',
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      profilePic: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      resetCode: {
        type: DataTypes.BIGINT,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      banned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      suspendedTimes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      dateSuspended: {
        type: DataTypes.STRING,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      authzero: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
    }
  );
};
