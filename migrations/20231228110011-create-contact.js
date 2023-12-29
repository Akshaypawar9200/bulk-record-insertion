'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.INTEGER
      },
      mobile: {
        type: Sequelize.INTEGER
      },
      account_id:{
        type: Sequelize.INTEGER,
        onDelete:"CASCADE",
        onUpdate:"CASCADE",
        references:{
          model:{
            tableName:"accounts"
        },
        key:'id'
      },
    },
    location_id:{
      type: Sequelize.INTEGER,
      onDelete:"CASCADE",
      onUpdate:"CASCADE",
      references:{
        model:{
          tableName:"locations"
      },
      key:'id'
    },
  },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contacts');
  }
};