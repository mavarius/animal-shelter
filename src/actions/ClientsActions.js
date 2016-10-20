import API from '../API'
// import AppDispatcher from '../AppDispatcher'

const ClientsActions = {
  getAllClients () {
    API.getAllClients()
  },

  addClient (newClient) {
    API.addClient(newClient)
  },

  getClientById (id) {
    API.getClientById(id)
  }
}

export default ClientsActions
