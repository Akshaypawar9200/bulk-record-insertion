'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    static associate(models) {
      location.hasMany(models.contact);
      location.belongsTo(models.account);
    }
  }

  location.init({
    address: {
      type: DataTypes.STRING,
      validate: {
        allowNull: {
          args: false,
          msg: 'Address cannot be null.',
        },
        isAlpha: {
          args: true,
          msg: 'Address must contain only alphabetic characters.',
        },
        notEmpty: {
          args: true,
          msg: 'Address cannot be empty.',
        },
      },
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        allowNull: {
          args: false,
          msg: 'City cannot be null.',
        },
        isAlpha: {
          args: true,
          msg: 'City must contain only alphabetic characters.',
        },
        notEmpty: {
          args: true,
          msg: 'City cannot be empty.',
        },
      },
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        allowNull: {
          args: false,
          msg: 'State cannot be null.',
        },
        isAlpha: {
          args: true,
          msg: 'State must contain only alphabetic characters.',
        },
        notEmpty: {
          args: true,
          msg: 'State cannot be empty.',
        },
      },
    },
    country: {
      type: DataTypes.STRING,
      validate: {
        allowNull: {
          args: false,
          msg: 'Country cannot be null.',
        },
        isAlpha: {
          args: true,
          msg: 'Country must contain only alphabetic characters.',
        },
        notEmpty: {
          args: true,
          msg: 'Country cannot be empty.',
        },
      },
    },
    phoneNo: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: {
          args: false,
          msg: 'Phone number cannot be null.',
        },
        isInt: {
          args: true,
          msg: 'Phone number must be an integer.',
        },
      },
    },
    dummyCol: {
      type: DataTypes.ARRAY({
        type: DataTypes.INTEGER,
        validate: {
          isInt: {
            args: true,
            msg: 'Dummy column must contain only integers.',
          },
          allowNull: {
            args: false,
            msg: 'Dummy column cannot be null.',
          },
        },
      }),
    },
  }, {
    sequelize,
    modelName: 'location',
    underscored: true,
  });

  return location;
};
