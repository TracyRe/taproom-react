import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Header from './components/Header'
import Kegs from './components/Kegs'
import Admin from './components/Admin'
import Error404 from './Error404'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Header/>
          <Route exact path='/' component={Kegs}/>
          <Route path='/admin' component={Admin}/>
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
