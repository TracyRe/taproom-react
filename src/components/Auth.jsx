import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Auth(props) {

  const Auth =  {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }


  return (
    <div style={Auth}>
      <Link to='admin'><button>Employees Only</button></Link>
    </div>
  )
}


export default Auth
