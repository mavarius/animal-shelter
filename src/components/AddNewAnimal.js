import React, { Component } from 'react'

import AnimalsActions from '../actions/AnimalsActions'
import InterfaceActions from '../actions/InterfaceActions'

export default class AddNewAnimal extends Component {
  submitNew (e) {
    e.preventDefault()

    let newFormData = {}

    for (let inputField in this.refs) {
      if (this.refs[inputField].value) {
        newFormData[inputField] = this.refs[inputField].value
        this.refs[inputField].value = ''
      }
    }

    AnimalsActions.addAnimal(newFormData)
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
            <label htmlFor="petName" className="col-xs-2 col-form-label">Name:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="petName" type="text" id="petName" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="commonName" className="col-xs-2 col-form-label">Type of Animal:</label>
            <div className="col-xs-4">
              <input className="form-control" ref="commonName" type="text" id="commonName" />
            </div>
            <label htmlFor="breed" className="col-xs-1 col-form-label">Breed:</label>
            <div className="col-xs-5">
              <input className="form-control" ref="breed" type="text" id="breed" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="sex" className="col-xs-2 col-form-label">Sex:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="sex" type="text" id="sex" />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-xs-2 col-form-label">Age:</label>
            <label htmlFor="years" className="col-xs-1 col-form-label">Years:</label>
            <div className="col-xs-4">
              <input className="form-control" ref="age_years" type="number" id="years" />
            </div>
            <label htmlFor="months" className="col-xs-1 col-form-label">Months:</label>
            <div className="col-xs-4">
              <input className="form-control" ref="age_months" type="number" id="months" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="temperment" className="col-xs-2 col-form-label">Temperment:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="temperment" type="text" id="temperment" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="description" className="col-xs-2 col-form-label">Description:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="description" type="text" id="description" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="arrivalDate" className="col-xs-2 col-form-label">Arrival Date:</label>
            <div className="col-xs-4">
              <input className="form-control" ref="arrivalDate" type="date" id="arrivalDate" />
            </div>
            <label htmlFor="vaccinationDate" className="col-xs-2 col-form-label">Vaccination Date:</label>
            <div className="col-xs-4">
              <input className="form-control" ref="vaccinationDate" type="date" id="vaccinationDate" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="photo" className="col-xs-2 col-form-label">Photo:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="photo" type="url" id="photo" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="ownerId" className="col-xs-2 col-form-label">Owner Client ID:</label>
            <div className="col-xs-4">
              <input className="form-control" ref="ownerId" type="text" id="ownerId" />
            </div>
            <label htmlFor="adoptionDate" className="col-xs-2 col-form-label">Adoption Date:</label>
            <div className="col-xs-4">
              <input className="form-control" ref="adoptionDate" type="date" id="adoptionDate" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="note" className="col-xs-2 col-form-label">Note:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="note" type="text" id="note" />
            </div>
          </div>

          <button className="btn btn-success">save</button>
        </form>
        <button className="btn btn-default" onClick={() => this.cancelForm()}>cancel</button>
      </div>
    )
  }
}
