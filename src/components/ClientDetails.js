import React, { Component } from 'react'

import ClientsActions from '../actions/ClientsActions'
import ClientsStore from '../stores/ClientsStore'

import InterfaceStore from '../stores/InterfaceStore'

export default class ClientDetails extends Component {
  constructor () {
    super()

    this.state = {
      client: ClientsStore.getOne(),
      modal: InterfaceStore.getAll()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    ClientsStore.startListening(this._onChange)
    InterfaceStore.startListening(this._onChange)
    ClientsActions.getClientById(this.props.params.id)
  }

  componentWillUnmount () {
    ClientsStore.stopListening(this._onChange)
    InterfaceStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      client: ClientsStore.getOne(),
      modal: InterfaceStore.getAll()
    })
  }

  render () {
    if (this.state.client) {
      const { firstName, lastName, email, phone, address, city, state, zip, photo, note } = this.state.client

      return (
        <div className="row">
          <div className="clientDetails col-xs-12">
            <div className="photo col-xs-12 col-md-4"><img src={photo || '../images/placeholder.png'} /></div>
            <div className="col-xs-12 col-md-8">
              <h1 className="clientName">{firstName || ''} {lastName || ''}</h1>
              <phone>{phone ? `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6, 10)}` : ''}</phone>
              <p>{email || ''}</p>
              <p>{address}</p>
              <p>{city}, {state} {zip}</p>
              <p>Note: {note}</p>
            </div>
          </div>
        </div>
      )
    } else {
      return <div>searching...</div>
    }
  }
}
