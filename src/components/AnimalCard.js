import React, { Component } from 'react'
import { Link } from 'react-router'

export default class AnimalCard extends Component {
  render () {
    let { i } = this.props
    const { id, petName, commonName, breed, arrivalDate, adoptionDate, ownerFirstName, ownerLastName, temperment, photo } = this.props.animals[i]

    return (
      <Link to={`/animal/${id}`} className="animalCard">
        <span className="photo"><img src={photo || '../images/placeholder.png'} /></span>
        <h3>{petName}</h3>
        <h5>{commonName} | {breed}</h5>
        <p className="arrivalDate">{arrivalDate}</p>
        <p className="adoptionDate">{adoptionDate || 'available for adoption'}</p>
        <p className="ownerName">{`${ownerFirstName} ${ownerLastName}` || ''}</p>
        <p className="temperment">{temperment}</p>
      </Link>
    )
  }
}
