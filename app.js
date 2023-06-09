require('dotenv').config()
const express = require('express');
const path = require('path');
const mongoose = require('./mongodb')
const saucesRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

const app = express();

//intercepte toutes les requêtes json

app.use(express.json());

//cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;