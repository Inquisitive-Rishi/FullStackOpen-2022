require('dotenv').config();

const express = require('express');
const logger = require('./utils/logger');
const app = require('./app');

app.use(express.static('dist'));


const { PORT } = process.env;
app.listen(PORT);
logger.info(`server is listening to port ${PORT}`);
