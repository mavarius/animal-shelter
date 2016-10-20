import React, { Component } from 'react'

import AnimalsActions from '../actions/AnimalsActions'
import AnimalsStore from '../stores/AnimalsStore'

import InterfaceStore from '../stores/InterfaceStore'

export default class AnimalDetails extends Component {
  constructor () {
    super()

    this.state = {
      animal: AnimalsStore.getOne(),
      modal: InterfaceStore.getAll()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    AnimalsStore.startListening(this._onChange)
    InterfaceStore.startListening(this._onChange)
    AnimalsActions.getAnimalById(this.props.params.id)
  }

  componentWillUnmount () {
    AnimalsStore.stopListening(this._onChange)
    InterfaceStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      animal: AnimalsStore.getOne(),
      modal: InterfaceStore.getAll()
    })
  }

  render () {
    if (this.state.animal) {
      const { petName, commonName, breed, sex, age_years, age_months, temperment, description, vaccinationDate, arrivalDate, adoptionDate, ownerFirstName, ownerLastName, photo, note } = this.state.animal

      return (
        <div className="animalDetails">
          <span className="photo"><img src={photo || '../images/placeholder.png'} /></span>
          <h3>{petName}</h3>
          <h5>{commonName}</h5>
          <h6>{breed}</h6>
          <p>{sex}</p>
          <h6>Age: {age_years} years {age_months} months</h6>
          <p className="arrivalDate">Arrival Date: {arrivalDate}</p>
          <p className="adoptionDate">Adoption Date: {adoptionDate || 'available for adoption'}</p>
          <p className="ownerName">Current Owner: {`${ownerFirstName} ${ownerLastName}` || ''}</p>
          <p className="temperment">Temperment: {temperment}</p>
          <p className="description">Description: {description}</p>
          <p className="vaccinationDate">Vaccination Date: {vaccinationDate}</p>
          <p className="note">Note: {note}</p>
        </div>
      )
    } else {
      return <div>searching...</div>
    }
  }
}
