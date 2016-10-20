import React, { Component } from 'react'

import Modal from './Modal'
import SearchAdd from './SearchAdd'

export default class HomePage extends Component {
  render () {
    return (
      <div>
        <SearchAdd section="animals" />
        <SearchAdd section="clients" />
        <Modal />
      </div>
    )
  }
}
