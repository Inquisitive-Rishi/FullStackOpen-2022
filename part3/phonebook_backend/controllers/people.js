const peopleRouter = require('express').Router();
const Person = require('../models/person');

peopleRouter.get('/info', (req, res) => {
  const currDT = new Date();
  res.send(`phonebook <br/> ${currDT}`);
});
  
peopleRouter.get('/', (req, res) => {
  Person.find().then((person) => {
    res.json(person);
  });
});

peopleRouter.get('/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => next(err));
});

peopleRouter.post('/', (req, res) => {
  const { body } = req;
  if (body.name === undefined) {
    res.status(404).json({ error: 'content missing' });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    res.json(savedPerson);
  });
});

peopleRouter.delete('/:id', (req, res, err, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => next(err));
});

module.exports = peopleRouter;
