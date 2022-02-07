import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5000/api'
})
// instance.interceptors.request(config => {

// })

export default instance
