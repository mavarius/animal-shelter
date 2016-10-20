import React, { Component } from 'react'

export default class SearchBar extends Component {
  _liveSearch () {
    console.log('liveSearch')
  }

  render () {
    return (
      <div className="searchBar">
        <div className="searchInput">
          <input onChange={() => this._liveSearch()} type="text" />
        </div>
      </div>
    )
  }
}
