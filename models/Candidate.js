const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Candidate = sequelize.define('Candidate', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  party: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  votes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  timestamps: false
});

module.exports = Candidate;
