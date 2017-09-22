import React, { Component }  from 'react'
import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Navigation from './components/Navigation'
import UserLogin from './components/UserLogin'
import Journal from './components/Journal'
import Parks from './components/Parks'
import ParkDetails from './components/ParkDetails'

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={Layout} />
      <Route path='/login' component={UserLogin} />
      <Route path='/journal' component={Journal} />
      <Route path='/parks' component={Parks} />
      <Route path='/parks/:parkId' component={ParkDetails} />
    </div>
  </HashRouter>, document.getElementById('parkEntrance')
)
