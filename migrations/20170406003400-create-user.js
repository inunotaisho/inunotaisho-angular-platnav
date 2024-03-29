'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Users',{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username:{
        type:Sequelize.STRING,
        unique:true
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type:Sequelize.STRING,
        unique:true
      },
      emailPassword: {
        type:Sequelize.STRING
      },
      userImage:{
        type:Sequelize.STRING,
        unique:true
      },
      profileImage:{
        type:Sequelize.STRING,
        unique:true
      },
      createdAt: {
        allowNull: false,
        type:Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type:Sequelize.DATE
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};
