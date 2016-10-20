import React, { Component } from 'react'
import uuid from 'uuid'

import AnimalCard from './AnimalCard'
import ClientCard from './ClientCard'

export default class SearchList extends Component {
  render () {
    let { section } = this.props

    let cards

    if (section === 'animals') {
      cards = this.props[section].map((element, i) => <AnimalCard key={uuid()} i={i} {...this.props} />)
    } else if (section === 'clients') {
      cards = this.props[section].map((element, i) => <ClientCard key={uuid()} i={i} {...this.props} />)
    }

    return (
      <div>
        {cards}
      </div>
    )
  }
}
