import React, { Component } from 'react'
import moment from 'moment'

import AnimalsActions from '../actions/AnimalsActions'
import AnimalsStore from '../stores/AnimalsStore'

import ClientsActions from '../actions/ClientsActions'
import ClientsStore from '../stores/ClientsStore'

import InterfaceStore from '../stores/InterfaceStore'

export default class AnimalDetails extends Component {
  constructor () {
    super()

    this.state = {
      animal: AnimalsStore.getOne(),
      clients: ClientsStore.getAll(),
      modal: InterfaceStore.getAll()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    AnimalsStore.startListening(this._onChange)
    ClientsStore.startListening(this._onChange)
    InterfaceStore.startListening(this._onChange)
    AnimalsActions.getAnimalById(this.props.params.id)
    ClientsActions.getAllClients()
  }

  componentWillUnmount () {
    AnimalsStore.stopListening(this._onChange)
    ClientsStore.stopListening(this._onChange)
    InterfaceStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      animal: AnimalsStore.getOne(),
      clients: ClientsStore.getAll(),
      modal: InterfaceStore.getAll()
    })
  }

  _adopt (e) {
    e.preventDefault()

    let newFormData = {}

    for (let inputField in this.refs) {
      if (this.refs[inputField].value) {
        newFormData[inputField] = this.refs[inputField].value
      }
    }

    newFormData['adoptionDate'] = moment().format('YYYY-MM-DD')

    let updateId = this.props.params.id

    console.log('newFormData: ', newFormData)

    AnimalsActions.updateAnimal(updateId, newFormData)
  }

  render () {
    if (this.state.animal) {
      const { petName, commonName, breed, sex, age_years, age_months, temperment, description, vaccinationDate, arrivalDate, adoptionDate, ownerId, ownerFirstName, ownerLastName, photo, note } = this.state.animal

      return (
        <div className="animalDetails">
          <span className="photo"><img src={photo || '../images/placeholder.png'} /></span>
          <h3>{petName}</h3>
          <h5>{commonName}</h5>
          <h6>{breed}</h6>
          <p>{sex}</p>
          <h6>Age: {age_years} years {age_months} months</h6>
          <p className="arrivalDate">Arrival Date: {arrivalDate}</p>
          <p className="temperment">Temperment: {temperment}</p>
          <p className="description">Description: {description}</p>
          <p className="vaccinationDate">Vaccination Date: {vaccinationDate}</p>
          <p className="note">Note: {note}</p>

          {!ownerId ?
            <form onSubmit={(e) => this._adopt(e)}>
              <h5>Available for Adoption</h5>
              <select className="btn  dropdown-toggle" ref="ownerId">
                <option value={null}>Select Client</option>
                {this.state.clients.map(client => {
                  const { id, firstName, lastName } = client
                  return <option key={id} value={id}>{firstName} {lastName}</option>
                })}
              </select>
              <button>adopt</button>
            </form>
          : <span>
            <p className="adoptionDate">Adoption Date: {adoptionDate || 'available for adoption'}</p>
            <p className="ownerName">Current Owner: {`${ownerFirstName} ${ownerLastName}` || ''}</p>
          </span>
          }
        </div>
      )
    } else {
      return <div>searching...</div>
    }
  }
}
