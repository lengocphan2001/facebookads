const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');
const AdGroup = require('../models/AdGroup');
const Ad = require('../models/Ad');

// Get all campaigns
router.get('/', async (req, res) => {
  try {
    const campaigns = await Campaign.findAll({
      include: [{
        model: AdGroup,
        include: [{
          model: Ad
        }]
      }]
    });
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single campaign
router.get('/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findByPk(req.params.id, {
      include: [{
        model: AdGroup,
        include: [{
          model: Ad
        }]
      }]
    });
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
    res.json(campaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create campaign
router.post('/', async (req, res) => {
  try {
    const campaign = await Campaign.create(req.body);
    res.status(201).json(campaign);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update campaign
router.patch('/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findByPk(req.params.id);
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
    await campaign.update(req.body);
    res.json(campaign);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete campaign
router.delete('/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findByPk(req.params.id);
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
    await campaign.destroy();
    res.json({ message: 'Campaign deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 