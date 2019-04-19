import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddKeg from './AddKeg'
import EditKeg from './EditKeg'

function Admin(props) {

  const Admin =  {
    background: '#0f0',
  }


  return (
    <div style={Admin}>
      <h3>Admin is Working</h3>
      <AddKeg/>
      <EditKeg/>
    </div>
  )
}

Admin.propTypes = {
  admin: PropTypes.string,
}

export default Admin
