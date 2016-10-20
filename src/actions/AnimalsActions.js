import API from '../API'
// import AppDispatcher from '../AppDispatcher'

const AnimalsActions = {
  getAllAnimals () {
    API.getAllAnimals()
  },

  addAnimal (newAnimal) {
    API.addAnimal(newAnimal)
  },

  getAnimalById (id) {
    API.getAnimalById(id)
  }
}

export default AnimalsActions
