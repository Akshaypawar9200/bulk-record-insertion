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
        validate: {
          allowNull: {
            args: false,
            msg: "Name cannot be null.",
          },
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
        validate: {
          allowNull: {
            args: false,
            msg: "Department cannot be null.",
          },
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
        validate: {
          isInt: {
            args: true,
            msg: "Salary must be an integer.",
          },
          allowNull: {
            args: false,
            msg: "Salary cannot be null.",
          },
        },
      },
      mobile: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: {
            args: true,
            msg: "Mobile number must be an integer.",
          },
          allowNull: {
            args: false,
            msg: "Mobile number cannot be null.",
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
