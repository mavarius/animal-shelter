import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveAllAnimals (data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ALL_ANIMALS',
      payload: data
    })
  },

  receiveAnimal (data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ANIMAL',
      payload: data
    })
  },

  receiveAllClients (data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ALL_CLIENTS',
      payload: data
    })
  },

  receiveClient (data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_CLIENT',
      payload: data
    })
  }
}

export default ServerActions
