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
      <div className="searchAdd">
        <h5>{section.toUpperCase()}</h5>
        <input type="text" />
        <Link to={`search/${section}`}><button>search</button></Link>
        <button onClick={() => this._openModal()}>add new</button>
        <Link to={`search/${section}`}><button>show all</button></Link>
      </div>
    )
  }
}
