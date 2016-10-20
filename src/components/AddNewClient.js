import React, { Component } from 'react'

import ClientsActions from '../actions/ClientsActions'
import InterfaceActions from '../actions/InterfaceActions'

export default class AddNewClient extends Component {
  submitNew (e) {
    e.preventDefault()

    let newFormData = {}

    for (let inputField in this.refs) {
      if (this.refs[inputField].value) {
        newFormData[inputField] = this.refs[inputField].value
        this.refs[inputField].value = ''
      }
    }

    ClientsActions.addClient(newFormData)
    InterfaceActions.modalSwitch(false)
  }

  cancelForm () {
    for (let inputField in this.refs) {
      this.refs[inputField].value = ''
    }

    InterfaceActions.modalSwitch(false)
  }

  render () {
    return (
      <div className="addNew row">
        <form onSubmit={(e) => this.submitNew(e)}>
          <div className="form-group row">
            <label htmlFor="firstName" className="col-xs-2 col-form-label">First Name:</label>
            <div className="col-xs-4">
              <input className="form-control" ref="firstName" type="text" id="firstName" />
            </div>
            <label htmlFor="lastName" className="col-xs-2 col-form-label">Last Name:</label>
            <div className="col-xs-4">
              <input className="form-control" ref="lastName" type="text" id="lastName" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="email" className="col-xs-2 col-form-label">Email:</label>
            <div className="col-xs-6">
              <input className="form-control" ref="email" type="email" id="email" />
            </div>
            <label htmlFor="phone" className="col-xs-1 col-form-label">Phone:</label>
            <div className="col-xs-3">
              <input className="form-control" ref="phone" type="tel" id="phone" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="address" className="col-xs-2 col-form-label">Address:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="address" type="text" id="address" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="city" className="col-xs-2 col-form-label">City:</label>
            <div className="col-xs-4">
              <input className="form-control" ref="city" type="text" id="city" />
            </div>
            <label htmlFor="state" className="col-xs-1 col-form-label">State:</label>
            <div className="col-xs-1">
              <input className="form-control" ref="state" type="text" id="state" />
            </div>
            <label htmlFor="zip" className="col-xs-1 col-form-label">Zip:</label>
            <div className="col-xs-3">
              <input className="form-control" ref="text" type="text" id="zip" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="photo" className="col-xs-2 col-form-label">Photo:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="photo" type="text" id="photo" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="note" className="col-xs-2 col-form-label">Note:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="note" type="text" id="note" />
            </div>
          </div>

          <button className="btn pBtn col-xs-6 col-md-2">save</button>
        </form>
        <button className="btn col-xs-6 col-md-2" onClick={() => this.cancelForm()}>cancel</button>
      </div>
    )
  }
}
