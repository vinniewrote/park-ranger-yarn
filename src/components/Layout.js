import React, { Component }  from 'react'
import {render} from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'
import Navigation from './Navigation'
import UserLogin from './UserLogin'
import Journal from './Journal'
import Parks from './Parks'
import ParkDetails from './ParkDetails'

class Layout extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path='/' component={Navigation} />
          <Route path='/login' component={UserLogin} />
          <Route path='/journal' component={Journal} />
          <Route path='/parks' component={Parks} />
          <Route path='/parks/:parkId' component={ParkDetails}></Route>
        </div>
      </HashRouter>
    )
  }
}

render(<Layout />, document.getElementById('parkEntrance'))
