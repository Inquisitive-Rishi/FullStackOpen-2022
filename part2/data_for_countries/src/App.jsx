import axios from "axios"
import { useEffect } from "react"

const App = () => {

  const countries = []
  const getCountriesName = () => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(res => {
      const names = res.data;
      names.map(name => countries.push(name.name.common))
    })
  }
  
  

  return (
    <>
    <button onClick={getCountries}>get countries</button>
    <label htmlFor="country">
      find countries: 
      <input type="text" id="country"/>
    </label>
    </>
  )
}

export default App
