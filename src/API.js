import { get, post, put } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getAllAnimals () {
    get('/api/animals')
      .then(res => {
        ServerActions.receiveAllAnimals(res.data)
      })
      .catch(console.error)
  },

  getAllClients () {
    get('/api/clients')
      .then(res => {
        ServerActions.receiveAllClients(res.data)
      })
      .catch(console.error)
  },

  addAnimal (newAnimal) {
    post('/api/animals', newAnimal)
      .then(res => {
        ServerActions.receiveAllAnimals(res.data)
      })
      .catch(console.error)
  },

  addClient (newClient) {
    post('/api/clients', newClient)
      .then(res => {
        ServerActions.receiveAllClients(res.data)
      })
      .catch(console.error)
  },

  getAnimalById (id) {
    get(`/api/animals/${id}`)
      .then(res => {
        ServerActions.receiveAnimal(res.data)
      })
      .catch(console.error)
  },

  getClientById (id) {
    get(`/api/clients/${id}`)
      .then(res => {
        ServerActions.receiveClient(res.data)
      })
      .catch(console.error)
  },

  updateAnimal (id, updateData) {
    put(`/api/animals/${id}`, updateData)
      .then(res => {
        ServerActions.receiveAnimal(res.data)
      })
      .catch(console.error)
  }
}

export default API
