import React, { Component } from 'react'
import { Link } from 'react-router'

import InterfaceActions from '../actions/InterfaceActions'

export default class SearchAdd extends Component {
  _openModal () {
    const { section } = this.props
    InterfaceActions.modalSwitch(true, section)
  }

  render () {
    const { section } = this.props
    return (
      <div className="searchAdd col-xs-12 col-sm-6">
        <h3>{section.toUpperCase()}</h3>
        {/* <input type="text" /> */}
        {/* <Link to={`search/${section}`}><button>search</button></Link> */}
        <button className="btn pBtn col-xs-5" onClick={() => this._openModal()}>add new</button>
        <Link to={`search/${section}`}><button className="btn pBtn col-xs-5 col-xs-offset-2">show all</button></Link>
      </div>
    )
  }
}
