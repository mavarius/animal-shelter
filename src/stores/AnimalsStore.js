import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _animals = []

let _singleAnimal = []

class AnimalsStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_ALL_ANIMALS':
          _animals = action.payload
          this.emit('CHANGE')
          break
        case 'RECEIVE_ANIMAL':
          _singleAnimal = action.payload
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
    return _animals
  }

  getOne () {
    return _singleAnimal[0]
  }

}

export default new AnimalsStore()
