import React, { Component }  from 'react'
import {render} from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'
import Navigation from './Navigation'
import UserLogin from './UserLogin'
import Journal from './Journal'
import Parks from './Parks'

class Layout extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path='/' component={Navigation} />
          <Route path='/login' component={UserLogin} />
          <Route path='/journal' component={Journal} />
          <Route path='/parks' component={Parks} />
        </div>
      </HashRouter>
    )
  }
}

render(<Layout />, document.getElementById('parkEntrance'))
