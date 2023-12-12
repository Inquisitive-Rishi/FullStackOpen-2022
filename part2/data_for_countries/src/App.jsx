import axios from "axios"
import Country from './components/Country'
import { useEffect, useState } from "react"

const App = () => {

  const [countryName, setCountryName] = useState([])

  const countries = []
  
  useEffect(() => {
      axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(res => {
        const names = res.data;
        names.map(name => { 
          countries.push(name.name.common)
          console.log(name.name.common);
        }  
        )
      })
  },[])

  const showCountry = (e) => {
    e.preventDefault()
    if (countries) {
      const countriesToShow = countries
      setCountryName(countriesToShow);
      console.log(countriesToShow);
    }
  }

  return (
    <>
    <label htmlFor="country">
      find countries: 
      <input type="text" id="country" onChange={showCountry}/>
    </label>
    <ul>
    {countryName.map(cn => <Country key={cn.id} name={cn}/>)}
    </ul>
    </>
  )
}

export default App
