import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



function KegChange(props) {

  const KegChange =  {
    background: '#fff',
  }


  return (
    <div style={KegChange}>
      <form>
        <label for=''>Name</label>
        <input type='text' name='beerName' value={props.beername}/>
        <label for=''>Brand</label>
        <input type='text' name='beerBrand' value={props.brand}/>

        <label for=''>Price per Pint</label>
        <input type='number' name='beerPrice' value={props.price}/>

        <label for=''>ABV</label>
        <input type='number' name='beerAbv' value={props.abv}/>

        <label for=''>Pints per Keg</label>
        <input type='number' name='beerAbv' value='124' disabled/>

        <label for=''>Image</label>
        <input type='text' name='image' value={props.img} disabled/>
        <button> Save Keg Changes</button>

      </form>
    </div>
  )
}

KegChange.propTypes = {
  img: PropTypes.string,
  beername: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  pints: PropTypes.number
}

export default KegChange
