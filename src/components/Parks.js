import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import ParkSelect from './ParkSelect'
import {database} from './Firebase'
import Nav from './Navigation'

class Parks extends Component {
  render() {
    return (
      <div>
        <h3>Select a Park</h3>
        {parkListing.parks.map(park => <ParkSelect park={park} />)}
        {this.state.parks.map((park, key) => <p key={key} className={park.coasterActive}>{park.coasterName}</p>)}
        <Nav />
      </div>
    )
  }
}

export default Parks


//create a ref with uid/date/
//then include coasters, attractions, etc
// use handleSubmit for the log ride actions
