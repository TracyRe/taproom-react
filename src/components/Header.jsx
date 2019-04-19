import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Header() {

  const Header =  {
    fontSize: '2rem',
    fontWeight: '800',
    color: '#fff'
  }


  return (
    <div>
      <Link to='/'><h1 style={Header}>Welcome to Portland Tap Room</h1></Link>
    </div>
  )
}

export default Header
