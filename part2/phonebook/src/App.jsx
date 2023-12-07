import { useEffect, useState } from 'react'
import Person from './components/Person'
import axios from 'axios'

const App = () => {

  const [person, setPerson] = useState([])
  const [newName, setNewName] = useState("new name")
  const [newNumber, setNewNumber] = useState("new number");

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
      id: person.length + 1
    }
    
    let checkArr = []
    
    for (let obj of person) {
      (obj.name !== newObj.name) ? checkArr.push(0) : checkArr.push(1);
    }      

    if (checkArr.includes(1)) {
      alert(`${newObj.name} already exists in phonebook`)
    } else {
      setPerson(person.concat(newObj))
      setNewName('')
      setNewNumber('')   
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
      {person.map(person => 
        <Person person={person} key={person.id}/> 
      )}
      </ul>

    </>
  )
}

export default App 