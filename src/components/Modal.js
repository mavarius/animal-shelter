import React, { Component } from 'react'

import AddNewAnimal from './AddNewAnimal'
import AddNewClient from './AddNewClient'
import InterfaceActions from '../actions/InterfaceActions'

export default class Modal extends Component {

  _closeModal () {
    InterfaceActions.modalSwitch(false)
  }

  render () {
    const { visible, modalContent } = this.props

    let modalClass
    visible ? modalClass = 'modalOpen' : modalClass = 'modalClosed'

    let mContent

    switch (modalContent) {
      case 'animals':
        mContent = <AddNewAnimal />
        break
      case 'clients':
        mContent = <AddNewClient />
        break
      default:
        mContent = <div></div>
    }

    return (
      <div id="myModal" className={modalClass}>
        <div className="modalContent">
          <div className="row">
            <span className="close" onClick={() => this._closeModal()}>close</span>
          </div>
          {mContent}
        </div>
      </div>
    )
  }
}
