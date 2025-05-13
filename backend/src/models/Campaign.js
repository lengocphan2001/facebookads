const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Campaign = sequelize.define('Campaign', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  distribution: {
    type: DataTypes.ENUM('Đang tắt', 'Đang chạy'),
    defaultValue: 'Đang tắt'
  },
  biddingStrategy: {
    type: DataTypes.STRING,
    defaultValue: 'Sử dụng chiến lược...'
  },
  budget: {
    type: DataTypes.STRING,
    defaultValue: 'Sử dụng ngân sách...'
  },
  allocationSettings: {
    type: DataTypes.STRING,
    defaultValue: 'Lượt click tron...'
  },
  results: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  reach: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  impressions: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  costPerResult: {
    type: DataTypes.STRING,
    defaultValue: '0 đ'
  },
  amountSpent: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  timestamps: true
});

module.exports = Campaign; 