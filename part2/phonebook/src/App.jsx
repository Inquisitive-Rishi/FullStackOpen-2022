import { useEffect, useState } from 'react'
import Person from './components/Person'
import personService from './services/persons'
import axios from 'axios'

const Notification = ({message}) => {
  const msgStyle = {
    padding: 10,
    color: 'black',
    fontSize: 18,
    backgroundColor: 'lightgrey',
    border: '2px solid green',
    borderRadius: 4,
    marginTop: 10
  }
  if (message === null) {
    return null;
  }
  return (
    <div style={msgStyle}>
    {message}
    </div>
  )
}

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [okNotification, setOkNotification] = useState('Add users')

  useEffect(() => {
    personService
    .getAllPersons()
    .then(initialData => {
        setPersons(initialData)
      })
  },[])

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }
  
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  const addPerson = (e) => {
    e.preventDefault()
    const newObj = {
      name: newName,
      number: newNumber,
    }
    

    let checkArr = []

    for (let obj of persons) {
      (obj.name !== newObj.name) ? checkArr.push(0) : checkArr.push(1);
    }      

    if (checkArr.includes(1)) {
      const result = window.confirm(`${newObj.name} already exists in phonebook, would you like to update the phone number?`)
        if (result) {
          const existingName = persons.find(p => p.name === newObj.name)
          const changedNumber = {...existingName, number: newObj.number}
          axios
            .put(`${personService.baseURL}/${existingName.id}`,changedNumber)
            .then(res => {
              setPersons(persons.map(p => p.id !== changedNumber.id ? p : res.data))
              setOkNotification(`${existingName.name} has updated his number to ${changedNumber.number}`)
              setTimeout(() => {
                setOkNotification(null)
              }, 5000);
            })
        } else {
          return false;
        }
    } else {
        personService
        .createData(newObj)
        .then(res => {
          setOkNotification(`${res.name} added`)
          setTimeout(() => {
            setOkNotification(null)
          }, 5000);
          setPersons(persons.concat(res))
          setNewName('')
          setNewNumber('')  
        })
      }
    }

    const removePerson = (name,id) => {
      const result = window.confirm(`remove ${name}?`)
      if (result) {
        axios.delete(`${personService.baseURL}/${id}`).then( res =>
            axios.get(personService.baseURL)
            .then(res => {
              setPersons(res.data)
            })
        )
        .catch(err => {
          console.log('Error:', err );
        })
      } else {
        console.log(name, 'ignored');
      }
    }

  return (
    <>
      <h1>Phonebook</h1>
       <Notification message={okNotification}/>
      <form onSubmit={addPerson}>
        <label htmlFor="name">name</label>
        <input value={newName} onChange={handleNameChange}/>
        <br />
        <label htmlFor="number">number</label>
        <input value={newNumber} onChange={handleNumberChange}/>
        <br />
        <button type='submit'>add</button>
       </form>
      <h1>Names</h1>
      <ul>
      {persons.map(person => 
        <Person person={person} key={person.id} removePerson={() => removePerson(person.name, person.id)}/> 
      )}
      </ul>

    </>
  )
}

export default App 