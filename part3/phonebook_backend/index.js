require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Person = require('./models/person');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

const getPersonCount = () =>
  `Phonebook currently has info for ${persons.length} people.`;

function giveDateAndTime() {
  return new Date();
}

const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  if (err.name === 'CastError') {
    return res.status(400).send({ error: 'malformed id' });
  }
  next(err);
};

app.get('/', (req, res) => {
  res.send('Hello welcome to this server');
});

app.get('/info', (req, res) => {
  const currDT = giveDateAndTime();
  const personCount = getPersonCount();
  res.send(`${personCount} <br/> ${currDT}`);
});

app.get('/api/persons', (req, res) => {
  Person.find().then((person) => {
    res.json(person);
  });
});

app.get('/api/persons/:id', (req, res, next) => {
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

app.post('/api/persons', (req, res) => {
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

app.delete('/api/persons/:id', (req, res, err, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((err) => next(err));
});

app.use(errorHandler);

const { PORT } = process.env;
app.listen(PORT);
console.log(`server is listening to port ${PORT}`);
