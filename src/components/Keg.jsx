import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Keg(props) {

  const Keg =  {
    background: '#fff',
  }


  return (
    <div style={Keg}>
      <img src={props.img} alt={props.beername} title={props.beername}/>
      <h3>{props.beername} -  ${props.price}</h3>
      <p class="brand">{props.brand}</p>
      <p>ABV: {props.abv}%</p>

      <p>Pints remaining: {props.pints}</p>

    </div>
  )
}

Keg.propTypes = {
  img: PropTypes.string,
  beername: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  pints: PropTypes.number
}

export default Keg
