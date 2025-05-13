const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Campaign = require('./Campaign');

const AdGroup = sequelize.define('AdGroup', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  campaignId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Campaign,
      key: 'id'
    }
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  distribution: {
    type: DataTypes.STRING,
    defaultValue: 'Chiến dịch: Tắt'
  },
  biddingStrategy: {
    type: DataTypes.STRING,
    defaultValue: 'Mức cao nhất'
  },
  budget: {
    type: DataTypes.STRING,
    defaultValue: '200.000 đ\nHàng ngày'
  },
  lastImportantEdit: {
    type: DataTypes.STRING,
    defaultValue: ''
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
  }
}, {
  timestamps: true
});

// Define relationships
Campaign.hasMany(AdGroup, { foreignKey: 'campaignId' });
AdGroup.belongsTo(Campaign, { foreignKey: 'campaignId' });

module.exports = AdGroup; 