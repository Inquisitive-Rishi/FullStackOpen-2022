import { useState } from 'react'
import Person from './components/Person'

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
    const nameObj = {
      name: newName,
      number: newNumber,
      id: person.length + 1
    }
    setPerson(person.concat(nameObj))
    setNewName('')
    setNewNumber('')
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