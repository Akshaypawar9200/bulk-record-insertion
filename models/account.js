"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class account extends Model {
    static associate(models) {
      account.hasMany(models.location);
      account.hasMany(models.contact);
    }
  }
  
  account.init(
    {
      companyName: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Company name cannot be empty.",
          },
          isAlpha: {
            args: true,
            msg: "Company name must contain only alphabetic characters.",
          },
        },
      },
      website: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
          isUrl: {
            args: true,
            msg: "Website must be a valid URL.",
          },
          notNull: {
            args: true,
            msg: "Website cannot be null.",
          },
        },
      },
      empSize: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
          isInt: {
            args: true,
            msg: "Employee size must be an integer.",
          },
          notNull: {
            args: true,
            msg: "Employee size cannot be null.",
          },
        },
      },
      empRange: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
          isIn: {
            args: [
              [
                "0 - 10",
                "11 - 50",
                "51 - 200",
                "201 - 500",
                "501 - 1,000",
                "1,001 - 5,000",
                "5,001 - 10,000",
                "10,000+",
              ],
            ],
            msg: "Invalid employee range.",
          },
          notNull: {
            args: true,
            msg: "Employee range cannot be null.",
          },
        },
      },
      revenu: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
          isInt: {
            args: true,
            msg: "Revenue size must be an integer.",
          },
          notNull: {
            args: true,
            msg: "Revenue cannot be null.",
          },
        },
      },
      revenueRange: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
          isIn: {
            args: [
              [
                "0 - $1M",
                "$1M - $10M",
                "$10M - $50M",
                "$50M - $100M",
                "$100M - $250M",
                "$250M - $500M",
                "$500M - $1B",
                "$1B - $10B",
                "$10B+",
              ],
            ],
            msg: "Invalid revenue range.",
          },
          notNull: {
            args: true,
            msg: "Revenue range cannot be null.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "account",
      underscored: true,
    }
  );
  
  return account;
};
