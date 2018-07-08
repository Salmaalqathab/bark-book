'use strict';

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
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
      // defaultValue: null
    },
    dogName: {
      type: Sequelize.STRING,
      allowNull: false
      // unique: true
      // defaultValue: null
    },
    dogPhoto: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
      // defaultValue: null
    },
    favorite_park: {
      type: Sequelize.TEXT,
      allowNull: false,
      // unique: true
      // defaultValue: null
    },
    preferred_time: {
      type: Sequelize.STRING,
      allowNull: false
      // unique: true
      // defaultValue: null
    },
    size: {
      type: Sequelize.STRING,
      allowNull: false
      // unique: true
      // defaultValue: null
    },
    personality: {
      type: Sequelize.STRING,
      allowNull: false
      // unique: true
      // defaultValue: null
    },
    activity_level: {
      type: Sequelize.STRING,
      allowNull: false
      // unique: true
      // defaultValue: null
    }
  });

  // Sync database
  sequelize.sync().then(function() {
    // Add a user
    // User.create({
    //   email: "doglady@hotmail.com",
    //   password: "abc123",
    //   name: "DogLady",
    //   dogName: "Sam",
    //   dogPhoto: "http://forums.roadbikereview.com/attachments/lounge/303054d1421259283-no-wonder-my-corgi-other-always-licked-me-corg-pb.jpg",
    //   favorite_park: "Canal Park",
    //   preferred_time: "Fridays",
    //   size: "small",
    //   personality: "laid-back",
    //   activity_level: "hyperactive"
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