import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function EditKeg(props) {

  const EditKeg =  {
    background: '#00f',
  }


  return (
    <div style={EditKeg}>
      <h3>EditKeg is Working</h3>
    </div>
  )
}

EditKeg.propTypes = {
  editKeg: PropTypes.string,
}

export default EditKeg
