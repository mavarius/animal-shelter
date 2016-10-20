import React, { Component } from 'react'

import SearchList from './SearchList'
import SearchBar from './SearchBar'

import AnimalsStore from '../stores/AnimalsStore'
import ClientsStore from '../stores/ClientsStore'

import AnimalsActions from '../actions/AnimalsActions'
import ClientsActions from '../actions/ClientsActions'

export default class SearchPage extends Component {
  constructor () {
    super()

    this.state = {
      animals: AnimalsStore.getAll(),
      clients: ClientsStore.getAll()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    AnimalsStore.startListening(this._onChange)
    ClientsStore.startListening(this._onChange)

    switch (this.props.params.section) {
      case 'animals':
        AnimalsActions.getAllAnimals()
        break
      case 'clients':
        ClientsActions.getAllClients()
        break
    }
  }

  componentWillUnmount () {
    AnimalsStore.stopListening(this._onChange)
    ClientsStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      animals: AnimalsStore.getAll(),
      clients: ClientsStore.getAll()
    })
  }

  render () {
    return (
      <div>
        <SearchBar />
        <SearchList section={this.props.params.section} {...this.state} />
      </div>
    )
  }
}

// this.props.params.section
