const express = require('express');
const router = express.Router();
const AdGroup = require('../models/AdGroup');
const Campaign = require('../models/Campaign');
const Ad = require('../models/Ad');

// Get all ad groups
router.get('/', async (req, res) => {
  try {
    const adGroups = await AdGroup.findAll({
      include: [
        {
          model: Campaign
        },
        {
          model: Ad
        }
      ]
    });
    res.json(adGroups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single ad group
router.get('/:id', async (req, res) => {
  try {
    const adGroup = await AdGroup.findByPk(req.params.id, {
      include: [
        {
          model: Campaign
        },
        {
          model: Ad
        }
      ]
    });
    if (!adGroup) {
      return res.status(404).json({ message: 'Ad Group not found' });
    }
    res.json(adGroup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create ad group
router.post('/', async (req, res) => {
  try {
    const adGroup = await AdGroup.create(req.body);
    res.status(201).json(adGroup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update ad group
router.patch('/:id', async (req, res) => {
  try {
    const adGroup = await AdGroup.findByPk(req.params.id);
    if (!adGroup) {
      return res.status(404).json({ message: 'Ad Group not found' });
    }
    await adGroup.update(req.body);
    res.json(adGroup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete ad group
router.delete('/:id', async (req, res) => {
  try {
    const adGroup = await AdGroup.findByPk(req.params.id);
    if (!adGroup) {
      return res.status(404).json({ message: 'Ad Group not found' });
    }
    await adGroup.destroy();
    res.json({ message: 'Ad Group deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 