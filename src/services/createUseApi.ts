import axios from 'axios'

const apiFake = axios.create({
  baseURL: 'http://localhost:3001/'
})

export default apiFake