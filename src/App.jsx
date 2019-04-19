import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Kegs from './components/Kegs';
import Admin from './components/Admin';
import Error404 from './Error404';

function App() {
  return (

      <div>
      <style global jsx>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        h1, h2, h3 {
          font-family: 'BioRhyme Expanded', serif;
          text-align: center;
        }

        a {
          text-decoration: none;
        }
        `}
      </style>
      <Header/>
        <Switch>
          <Route exact path='/' component={Kegs}/>
          <Route path='/admin' component={Admin}/>
          <Route component={Error404} />
        </Switch>
      </div>

  )
}

export default App
