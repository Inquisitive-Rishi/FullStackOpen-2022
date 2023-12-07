import { useEffect, useState } from 'react'
import Person from './components/Person'
import axios from 'axios'

const App = () => {

  const [person, setPerson] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(res => {
        setPerson(res.data)
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

    for (let obj of person) {
      (obj.name !== newObj.name) ? checkArr.push(0) : checkArr.push(1);
    }      

    if (checkArr.includes(1)) {
      alert(`${newObj.name} already exists in phonebook`)
    } else {
      axios
        .post('http://localhost:3001/persons', newObj)
        .then(res => {
          setPerson(person.concat(res.data))
          setNewName('')
          setNewNumber('')  
        })
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