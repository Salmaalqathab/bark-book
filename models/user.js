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

  //'Dogs' table with dog profile
  var Dogs = sequelize.define("Dogs", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    dogName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dogPhoto: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    favorite_park: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    preferred_time: {
      type: Sequelize.STRING,
      allowNull: false
    },
    size: {
      type: Sequelize.STRING,
      allowNull: false
    },
    personality: {
      type: Sequelize.STRING,
      allowNull: false
    },
    activity_level: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  //'Friends' table with favorites
  var Friends = sequelize.define("Friends", {

  });
  
  // Sync database
  sequelize.sync().then(function() {
    // Add a user
    // User.create({
    //   email: "poodlemom@yahoo.com",
    //   password: "passiton",
    //   name: "ChristopherRobin",
    //   dogName: "Winnie-the-Poodle",
    //   dogPhoto: "https://3.bp.blogspot.com/-MMEM1qWk0X4/VtFLzKRFZTI/AAAAAAAAnXA/rLd5CfA3-UU/s1600/12695006_10205897375008936_3652493532428370411_o.jpg",
    //   favorite_park: "Gage Eckington Park",
    //   preferred_time: "Sundays",
    //   size: "small",
    //   personality: "timid",
    //   activity_level: "moderately-energetic"
    // });
    
  });

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};