const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Category = require('../models/Category');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// @route   GET api/categories
// @desc    Get all categories
// @access  Public
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/categories
// @desc    Create a category
// @access  Private/Admin
router.post(
  '/',
  [
    auth,
    admin,
    [check('name', 'Name is required').not().isEmpty()]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, description } = req.body;

      const newCategory = new Category({
        name,
        description: description || ''
      });

      const category = await newCategory.save();
      res.json(category);
    } catch (err) {
      console.error(err.message);
      if (err.code === 11000) {
        return res.status(400).json({ msg: 'Category already exists' });
      }
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;