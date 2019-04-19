import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Error404() {

  const Error404 =  {
    background: '#f00',
  }


  return (
    <div style={Error404}>
      <h3>Page not found</h3>
      <p><Link to='/'>Back to the bar</Link></p>
    </div>
  )
}

export default Error404
