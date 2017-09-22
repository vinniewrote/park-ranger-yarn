import React, { Component }  from 'react'
import ReactRouter from 'react-router'
import { Link } from 'react-router'
import Deets from './ThemeParkDetails'
import parkListing from '../data/great_america'
import { browserHistory } from 'react-router'

class ParkDetails extends React.Component {
  constructor(props) {
      super(props);
      this.state = {filterKey: ''};
    }
    changeFilterKey(value) {
      this.setState({ filterKey: value });
    }
  render () {
    const park = this.props.parks.find(park => park.parkId == this.props.params.parkId);
    const allPoints = [
      ...park.coasters,
      ...park.attractions,
      ...park.restaurants,
      ...park.shops
    ]
    const anything = allPoints.filter(landmarks => {
      if (!this.state.filterKey) return landmarks;
      return landmarks.landmarkType === this.state.filterKey})
    return (
      <div className='parkContainer'>
        <div className='parkMasthead'>
          <button onClick={browserHistory.goBack}>Back</button>
          <h2>{park.parkName}</h2>
          <p>{park.parkOpenYear}</p>
          <p>{park.parkTheme}</p>
          <p>{park.parkDesigner}</p>
          <p>{park.parkOwner}</p>
        </div>
        <div className='filterbar'>
          <button onClick={this.changeFilterKey.bind(this, '')}>all</button>
          <button onClick={this.changeFilterKey.bind(this, 'coaster')}>coasters</button>
          <button onClick={this.changeFilterKey.bind(this, 'attraction')}>attractions</button>
          <button onClick={this.changeFilterKey.bind(this, 'restaurant')}>restaurants</button>
          <button onClick={this.changeFilterKey.bind(this, 'shop')}>shops</button>
        </div>
        <div className='parkFilter'>
          {anything.map((landmarks, i) => <Deets key={i} i={i} landmarks={landmarks}/>)}
        </div>
      </div>
    );
  }
}
export default ParkDetails;
