// 'use strict'; //this is not in passport

var bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, Sequelize) => {

  //'User' table with dog profile
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
    }
  });


   
    User.prototype.validPassword = function (password) {
      return bcrypt.compareSync(password, this.password);
    };
    User.hook("beforeCreate", function (user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(12), null);
    });
  
    return User;



  // User.associate = function(models) {
  //   // associations can be defined here
  // };
  // return User;
};