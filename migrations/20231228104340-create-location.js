'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      phone_no: {
        type: Sequelize.INTEGER
      },
      dummy_col: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
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
    await queryInterface.dropTable('locations');
  }
};