import { useEffect, useState } from 'react'
import Person from './components/Person'
import personService from './services/persons'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    personService
    .getAllPersons()
    .then(initialData => {
        setPersons(initialData)
      })
  },[])

  const handleNameChange = (e) => {
    setNewName(e.target.value);
    console.log(e.target.value);
  }
  
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
    console.log(e.target.value);
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
      alert(`${newObj.name} already exists in phonebook`)
    } else {
      personService
      .createData(newObj)
      .then(res => {
          setPersons(persons.concat(res))
          setNewName('')
          setNewNumber('')  
        })
      }
    }

    const removePerson = (name,id) => {
      const result = window.confirm(`remove ${name} with id ${id}?`)
      if (result) {
        console.log(name, 'removed');
      } else {
        console.log(name, 'ignored');
      }
    }

  return (
    <>
      <h1>Phonebook</h1>
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