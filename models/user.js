'use strict';

var bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, Sequelize) => {

  //'User' table with user information
  var User = sequelize.define("User", {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });

  // Sync database
  // sequelize.sync().then(function() {
  //   // Add a user
  //   // User.create({
  //   //   email: "poodlemom@yahoo.com",
  //   //   password: "passiton"
  //   // });
  // });

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  // User.associate = function(models) {
  //   User.hasMany(models.Dogs, {
  //     onDelete: "cascade"
  //   });
  // };
  return User;
};