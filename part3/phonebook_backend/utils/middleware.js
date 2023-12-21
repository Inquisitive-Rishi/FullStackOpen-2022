const logger = require('./logger')

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  if (err.name === 'CastError') {
    return res.status(400).send({ error: 'malformed id' });
  }
  next(err);
};

module.exports = {
  errorHandler
}