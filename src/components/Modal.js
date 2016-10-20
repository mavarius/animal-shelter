import React, { Component } from 'react'

import AddNewAnimal from './AddNewAnimal'
import AddNewClient from './AddNewClient'

import InterfaceActions from '../actions/InterfaceActions'
import InterfaceStore from '../stores/InterfaceStore'

export default class Modal extends Component {
  constructor () {
    super()

    this.state = {
      modal: InterfaceStore.getAll()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    InterfaceStore.startListening(this._onChange)
  }

  componentWillUnmount () {
    InterfaceStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      modal: InterfaceStore.getAll()
    })
  }

  _closeModal () {
    InterfaceActions.modalSwitch(false)
  }

  render () {
    const { visible, modalContent } = this.state.modal

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
