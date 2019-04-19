import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import barrel from '../assets/rum-barrel.jpeg';

function AddKeg(props) {

  const AddKeg =  {
    background: '#fff',
  }


  return (
    <div style={AddKeg}>
      <h2>Add Keg</h2>
      <form>
        <label for=''>Name</label>
        <input type='text' name='beerName' value=''/>

        <label for=''>Brand</label>
        <input type='text' name='beerBrand' value=''/>

        <label for=''>Price per Pint</label>
        <input type='number' name='beerPrice' value=''/>

        <label for=''>ABV</label>
        <input type='number' name='beerAbv' value=''/>

        <label for=''>Pints per Keg</label>
        <input type='number' name='beerAbv' value='124' disabled/>

        <label for=''>Image</label>
        <input type='text' name='image' value='../assets/rum-barrel.jpeg' disabled/>

        <h3>Beer Name </h3><p>{props.beername}</p>
        <h4>Brand </h4>
        <p>{props.brand}</p>
        <h5>Price per Pint </h5>
        <p>$ {props.price}</p>
        <h5>ABV </h5>
        <p>{props.abv} %</p>
        <h5><strong>Image</strong></h5> <img src={barrel}/>

        <button> Add Keg</button>

      </form>
    </div>
  )
}

AddKeg.propTypes = {
  img: PropTypes.string,
  beername: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  pints: PropTypes.number
}

export default AddKeg
