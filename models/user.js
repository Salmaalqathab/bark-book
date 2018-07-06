var bcrypt = require("bcrypt-nodejs");
module.exports = function (sequelize, DataTypes) {
  //'User' table with dog profile
  var User = sequelize.define("User", {
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
      unique: true,
      defaultValue: null
    },
    dogName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: null
    },
    dogPhoto: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      defaultValue: null
    },
    favorite_park: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      defaultValue: null
    },
    preferred_time: {
      type: DataTypes.TIME,
      allowNull: false,
      unique: true,
      defaultValue: null
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: null
    },
    personality: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: null
    },
    activity_level: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: null
    }
  });

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
