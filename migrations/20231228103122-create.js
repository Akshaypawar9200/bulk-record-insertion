'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_name: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      emp_size: {
        type: Sequelize.INTEGER
      },
      emp_range: {
        type: Sequelize.STRING
      },
      revenu: {
        type: Sequelize.INTEGER
      },
      revenue_range: {
        type: Sequelize.STRING
      }
      // created_at: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updated_at: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('accounts');
  }
};