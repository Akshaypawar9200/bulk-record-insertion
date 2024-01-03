"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    static associate(models) {
      contact.belongsTo(models.location);
      contact.belongsTo(models.account);
    }
  }
  contact.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
         
          isAlpha: {
            args: true,
            msg: "Name must contain only alphabetic characters.",
          },
          notEmpty: {
            args: true,
            msg: "Name cannot be empty.",
          },
        },
      },
      department: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
        
          isAlpha: {
            args: true,
            msg: "Department must contain only alphabetic characters.",
          },
          notEmpty: {
            args: true,
            msg: "Department cannot be empty.",
          },
        },
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
          isInt: {
            args: true,
            msg: "Salary must be an integer.",
          },
        
        },
      },
      mobile: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
          isInt: {
            args: true,
            msg: "Mobile number must be an integer.",
          },
        
        },
      },
    },
    {
      sequelize,
      modelName: "contact",
      underscored: true,
    }
  );
  return contact;
};
