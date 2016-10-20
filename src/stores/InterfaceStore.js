import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _modal = false

let _content = ''

class InterfaceStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'SWITCH_MODAL':
          _modal = action.payload.modalState
          _content = action.payload.content
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
    return {
      visible: _modal,
      modalContent: _content
    }
  }
}

export default new InterfaceStore()
