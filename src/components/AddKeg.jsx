import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function AddKeg(props) {

  const AddKeg =  {
    background: '#f00',
  }


  return (
    <div style={AddKeg}>
      <h3>AddKeg is Working</h3>
    </div>
  )
}

AddKeg.propTypes = {
  addKeg: PropTypes.string,
}

export default AddKeg
