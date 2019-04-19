import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import AddKeg from './AddKeg'
import EditKeg from './EditKeg'

function Admin(props) {

  const Admin =  {
    background: '#fff',
  }


  return (
    <div style={Admin}>
      <h3>Admin is Working</h3>
      <AddKeg/>
      <EditKeg/>
      <Link to='/'><button>Close Admin</button></Link>
    </div>
  )
}

Admin.propTypes = {
  admin: PropTypes.string,
}

export default Admin
