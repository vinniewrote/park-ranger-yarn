import React, { Component }  from 'react'
import {Link} from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <button><Link to='/login'>Login</Link></button>
        <button><Link to='/journal'>Journal</Link></button>
        <button><Link to='/parks'>Parks</Link></button>
      </nav>

    )
  }
}

export default Navigation
