import axios from 'axios'

const apiGitHub = axios.create({
  baseURL: 'http://api.github.com'
})

export default apiGitHub