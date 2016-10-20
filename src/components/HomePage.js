import React, { Component } from 'react'

import AnimalsActions from '../actions/AnimalsActions'
import AnimalsStore from '../stores/AnimalsStore'

import ClientsActions from '../actions/ClientsActions'
import ClientsStore from '../stores/ClientsStore'

import InterfaceStore from '../stores/InterfaceStore'

import Modal from './Modal'
import SearchAdd from './SearchAdd'

export default class HomePage extends Component {
  constructor () {
    super()

    this.state = {
      animals: AnimalsStore.getAll(),
      clients: ClientsStore.getAll(),
      modal: InterfaceStore.getAll()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    AnimalsStore.startListening(this._onChange)
    ClientsStore.startListening(this._onChange)
    InterfaceStore.startListening(this._onChange)
  }

  componentWillUnmount () {
    AnimalsStore.stopListening(this._onChange)
    ClientsStore.stopListening(this._onChange)
    InterfaceStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      animals: AnimalsStore.getAll(),
      clients: ClientsStore.getAll(),
      modal: InterfaceStore.getAll()
    })
  }

  render () {
    const { animals, clients, modal } = this.state

    return (
      <div>
        <SearchAdd section="animals" {...animals} />
        <SearchAdd section="clients" {...clients} />
        <Modal {...modal} />
      </div>
    )
  }
}
