const express = require('express')
const app = express()

const persons = [
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

const PORT = 3001;
app.listen(PORT)
console.log(`server is listening to port ${PORT}`);