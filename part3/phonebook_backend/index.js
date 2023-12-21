require('dotenv').config();

const express = require('express');
const logger = require('./utils/logger');
const app = require('./app');

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('Hello welcome to this server');
});

app.get('/info', (req, res) => {
  const currDT = new Date();
  res.send(`phonebook <br/> ${currDT}`);
});

const { PORT } = process.env;
app.listen(PORT);
logger.info(`server is listening to port ${PORT}`);
