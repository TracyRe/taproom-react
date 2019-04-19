import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Auth(props) {

  const Auth =  {
    background: '#fff',
  }


  return (
    <div style={Auth}>
      <Link to='admin'><button>Employees Only</button></Link>
    </div>
  )
}


export default Auth
