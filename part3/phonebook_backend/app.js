const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const peopleRouter = require('./controllers/people');
const logger = require('./utils/logger');
const mw = require('./utils/middleware')
const mongoose = require('mongoose');

const url = config.MONGODB_URI;

mongoose.set('strictQuery', false)

mongoose
  .connect(url)
  .then(() => logger.info('Connected to MongoDB'))
  .catch((err) => logger.error('Error connecting to MongoDB', err.message));

app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use('/api/persons', peopleRouter);
app.use(mw.errorHandler);

module.exports = app;
