import React, { Component }  from 'react'
import { Link } from 'react-router';
import parkListing from '../data/great_america'

class ThemeParkDetails extends Component {
  render() {
    const {landmarks} = this.props;
    return (
        <div className='landmark' data-landmarktype={landmarks.landmarkType}>
            {landmarks.coasterName}
            {landmarks.restaurantName}
            {landmarks.attractionName}
            {landmarks.shopName}
          <button>+</button>
        </div>
    )
  }
}

export default ThemeParkDetails;
