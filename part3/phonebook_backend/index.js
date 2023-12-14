const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const getPersonCount = () => {
  return `Phonebook currently has info for ${persons.length} people.`
}

function giveDateAndTime() {
  const currentDate = new Date()
  const optday = { weekday: 'short' }
  const optMonth = { month: 'short' }
  const dayName = currentDate.toLocaleString('en-US', optday)
  const monthName = currentDate.toLocaleString('en-US', optMonth)
  const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  const offsetTZ = currentDate.getTimezoneOffset()
  const currentTime = currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds()
  const dateToDisplay = `${dayName} ${monthName} ${currentDate.getMonth()} ${currentDate.getFullYear()} ${currentTime} GMT${offsetTZ}, (Indian Standard Time)`;    
  return dateToDisplay;
}  

app.get('/info', (req, res) => {
  const currDT = giveDateAndTime()
  const personCount = getPersonCount()
  res.send(`${personCount} <br/> ${currDT}`)
})

app.get('/api/persons', (req, res) => {
  res.send(persons)
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

const PORT = process.env.PORT || 3001;
app.listen(PORT)
console.log(`server is listening to port ${PORT}`);