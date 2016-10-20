import React, { Component } from 'react'
import { Link } from 'react-router'
import moment from 'moment'

export default class AnimalCard extends Component {
  render () {
    let { i } = this.props
    const { id, petName, commonName, breed, arrivalDate, adoptionDate, ownerFirstName, ownerLastName, temperment, photo } = this.props.animals[i]

    return (
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="cardSlot">
          <Link to={`/animal/${id}`} className="animalCard">
            <span className="photo"><img src={photo || '../images/placeholder.png'} /></span>
            <h2>{petName}</h2>
            <h4>{commonName} | {breed}</h4>
            <p className="arrivalDate"><strong>Arrived:</strong> {moment(arrivalDate).format('MMM DD YYYY')}</p>
            <p className="adoptionDate"><strong>Adopted:</strong> {moment(adoptionDate).format('MMM DD YYY') || 'available for adoption'}</p>
            <p className="ownerName"><strong>Owner:</strong> {`${ownerFirstName} ${ownerLastName}` || ''}</p>
            <p className="temperment"><strong>Temperment:</strong> {temperment}</p>
          </Link>
        </div>
      </div>
    )
  }
}
