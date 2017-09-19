import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import ParkSelect from './ParkSelect'
import parkListing from '../data/great_america'
import * as firebase from 'firebase'

const database=firebase.database()

class Parks extends Component {
  render() {
    return (
      <div>
        <h3>Select a Park</h3>
        {parkListing.parks.map(park => <ParkSelect park={park} />)}
      </div>
    )
  }
}

export default Parks
