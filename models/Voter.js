const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Voter = sequelize.define('Voter', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  has_voted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: false
});

module.exports = Voter;
