import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _clients = []

let _singleClient = []

class ClientsStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_ALL_CLIENTS':
          _clients = action.payload
          this.emit('CHANGE')
          break
        case 'RECEIVE_CLIENT':
          _singleClient = action.payload
          this.emit('CHANGE')
          break
      }
    })
  }

  startListening (cb) {
    this.on('CHANGE', cb)
  }

  stopListening (cb) {
    this.removeListener('CHANGE', cb)
  }

  getAll () {
    return _clients
  }

  getOne () {
    return _singleClient[0]
  }

}

export default new ClientsStore()
