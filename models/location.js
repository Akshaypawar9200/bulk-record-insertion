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
    companyname: {
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
    address: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        
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
      allowNull:false,
      validate: {
      
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
      allowNull:false,
      validate: {
        
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
      allowNull:false,
      validate: {
      
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
    phoneno: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
      
        isInt: {
          args: true,
          msg: 'Phone number must be an integer.',
        },
      },
    },
    dummycol: {
      type: DataTypes.ARRAY({
        type: DataTypes.INTEGER,
        validate: {
          isInt: {
            args: true,
            msg: 'Dummy column must contain only integers.',
          }
          
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
