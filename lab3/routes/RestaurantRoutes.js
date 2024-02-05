const express = require('express');
const Restaurant =  require('../models/Restaurant.js');
  const app = express();

// Read All Restaurants
app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Read Restaurant by Cuisine
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
  const { cuisine } = req.params;
  try {
    const restaurants = await Restaurant.find({ cuisine: cuisine });
    res.status(200).send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/restaurants', async (req, res) => {
  const { sortBy } = req.query;
  const sortOptions = {};

  if (sortBy === 'ASC' || sortBy === 'DESC') {
    sortOptions.restaurant_id = sortBy === 'ASC' ? 1 : -1;
  }

  try {
    const restaurants = await Restaurant.find({}, { _id: 0, cuisine: 1, name: 1, city: 1, restaurant_id: 1 }).sort(sortOptions);
    res.status(200).send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/restaurants/Delicatessen', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ cuisine: 'Delicatessen', city: { $ne: 'Brooklyn' } }, { _id: 0, cuisine: 1, name: 1, city: 1 }).sort({ name: 1 });
    res.status(200).send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = app;