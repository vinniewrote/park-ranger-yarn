import React, { Component }  from 'react'
import * as firebase from 'firebase'

const database=firebase.database()

class Parks extends Component {
  render() {
    return (
      <div>
        <p>The spot for park data</p>
      </div>
    )
  }
}

export default Parks
