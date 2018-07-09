'use strict';

var bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, Sequelize) => {

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

  
  // Sync database
  sequelize.sync().then(function() {
    // Add a dog
    // Dogs.create({
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


//   Dogs.associate = function(models) {
//     Dogs.belongsTo(models.User, {
//         foreignKey: {
//             allowNull: false
//         }
//     });
//   };
  return Dogs;
};