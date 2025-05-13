const express = require('express');
const router = express.Router();
const Ad = require('../models/Ad');
const AdGroup = require('../models/AdGroup');

// Get all ads
router.get('/', async (req, res) => {
  try {
    const ads = await Ad.findAll({
      include: [{
        model: AdGroup
      }]
    });
    res.json(ads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get ads by ad group
router.get('/adgroup/:adGroupId', async (req, res) => {
  try {
    const ads = await Ad.findAll({
      where: {
        adGroup: req.params.adGroupId
      },
      include: [{
        model: AdGroup
      }]
    });
    res.json(ads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single ad
router.get('/:id', async (req, res) => {
  try {
    const ad = await Ad.findByPk(req.params.id, {
      include: [{
        model: AdGroup
      }]
    });
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }
    res.json(ad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create ad
router.post('/', async (req, res) => {
  try {
    const ad = await Ad.create(req.body);
    res.status(201).json(ad);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update ad
router.patch('/:id', async (req, res) => {
  try {
    const ad = await Ad.findByPk(req.params.id);
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }
    await ad.update(req.body);
    res.json(ad);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete ad
router.delete('/:id', async (req, res) => {
  try {
    const ad = await Ad.findByPk(req.params.id);
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }
    await ad.destroy();
    res.json({ message: 'Ad deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 