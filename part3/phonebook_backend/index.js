require('dotenv').config()
const Person = require('./models/person')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))


const getPersonCount = () => {
  return `Phonebook currently has info for ${persons.length} people.`
}

function giveDateAndTime() {
  return new Date()
}  

app.get('/', (req, res) => {
  res.send('Hello welcome to this server')
})

app.get('/info', (req, res) => {
  const currDT = giveDateAndTime()
  const personCount = getPersonCount()
  res.send(`${personCount} <br/> ${currDT}`)
})

app.get('/api/persons', (req, res) => {
  Person.find().then(person => {
    res.json(person)
  })
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(p => p.id === id);
  if (person) {
    res.send(person)
  } else {
    res.status(404).end()
  }
})

app.post('/api/persons', (req, res) => {
  const body = req.body;
  const personExists = persons.find(p => p.name === body.name)

  if (!(body.name && body.number)) {
    res.status(204).end()
  } else {
    if (personExists) {
      res.send({
        "error": "Name must be unique"
      })
    } else {
      body.id = Math.trunc(Math.random()*1000)
      console.log(body);
      res.send(body)  
  }}
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(p => p.id !== id)

  res.status(204).end()
  console.log(persons);
})

const PORT = process.env.PORT;
app.listen(PORT)
console.log(`server is listening to port ${PORT}`);