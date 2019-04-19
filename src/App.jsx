import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Kegs from './components/Kegs';
import Admin from './components/Admin';
import Error404 from './Error404';
import bgimg from './assets/patrick-tomasso-499112-unsplash.jpg';

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
        body {
          background-image: url(${bgimg});
          background-repeat: no-repeat;
          background-size: cover;
          background-color: #0f0e0d;
          width: 100vw;
          height: 100%;
          font-size: 18px;
          font-family: Helvetica, Arial, sans-serif;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        button {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: .1rem;
          padding: .25rem 1rem;
          margin: .5rem;
          box-shadow: 1px 1px 0px rgba(20, 20, 20, 0.5);
        }

        input {
          font-size: 1rem;
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
