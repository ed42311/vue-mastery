import Axios from 'axios'

const baseURL = 'http://localhost:3000'

const apiClient = Axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export const getEvents = () => {
  return apiClient.get('/events')
}

export const getEvent = id => {
  return apiClient.get(`/events/${id}`)
}
