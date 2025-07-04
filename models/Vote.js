const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Voter = require('./Voter');
const Candidate = require('./Candidate');

const Vote = sequelize.define('Vote', {
  voter_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Voter,
      key: 'id',
    },
  },
  candidate_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Candidate,
      key: 'id',
    },
  },
}, {
  timestamps: false
});

module.exports = Vote;
