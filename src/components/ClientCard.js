import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ClientCard extends Component {
  render () {
    let { i } = this.props
    const { id, firstName, lastName, photo, phone, email } = this.props.clients[i]

    return (
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="cardSlot">
          <Link to={`/client/${id}`} className="clientCard">
            <span className="photo"><img src={photo || '../images/placeholder.png'} /></span>
            <h3 className="clientName">{firstName || ''} {lastName || ''}</h3>
            <phone>{phone ? `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, 10)}` : ''}</phone>
            <p>{email || ''}</p>
          </Link>
        </div>
      </div>
    )
  }
}
