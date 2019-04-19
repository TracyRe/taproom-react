import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Header() {

  const Header =  {
    fontSize: '1rem',
    fontWeight: '800'
  }


  return (
    <div style={Header}>
      <Link to='/'><h1>Welcome to Portland Tap Room</h1></Link>
    </div>
  )
}

export default Header
