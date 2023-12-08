import axios from "axios";

const baseURL = 'http://localhost:3001/persons'

const getAllPersons = () => {
  return axios.get(baseURL).then(res => res.data)
}


export default { getAllPersons };