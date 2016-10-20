import React, { Component } from 'react'

import Modal from './Modal'
import SearchAdd from './SearchAdd'

export default class HomePage extends Component {
  render () {
    return (
      <div>
      <div className="row">
        <SearchAdd section="animals" />
      </div>
      <div className="row">
        <SearchAdd section="clients" />
      </div>
        <Modal />
      </div>
    )
  }
}
