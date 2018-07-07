'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        // defaultValue: null
      },
      dogName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        // defaultValue: null
      },
      dogPhoto: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
        // defaultValue: null
      },
      favorite_park: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
        // defaultValue: null
      },
      preferred_time: {
        type: DataTypes.TIME,
        allowNull: false,
        unique: true
        // defaultValue: null
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        // defaultValue: null
      },
      personality: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        // defaultValue: null
      },
      activity_level: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        // defaultValue: null
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};