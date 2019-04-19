import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import KegChange from './KegChange';
import fancybarrel from '../assets/fancy-barrel.jpg';
import whiskeybarrel from '../assets/whiskey-barrel.jpg';
import oakbarrel from '../assets/oak-barrel.jpg';

const kegList = [
  {
    img: {fancybarrel},
    beername:'Fancy Beer',
    brand:'The Fanciest',
    price: 5,
    abv: 4.8,
    pints: 124
  },
  {
    img: {whiskeybarrel},
    beername:'Pliny the Elder',
    brand:'Russian River',
    price: 9,
    abv: 5.5,
    pints: 124
  },
  {
    img: {oakbarrel},
    beername:'Miller Lite',
    brand:'Miller',
    price: 3,
    abv: 3.4,
    pints: 124
  }
]


function EditKeg(props) {

  const EditKeg =  {
    background: '#fff',
  }


  return (
    <div style={EditKeg}>
      <h3>Edit Keg</h3>
      {kegList.map((keg, index) =>
        <KegChange
          img={keg.img}
          beername={keg.beername}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          pints={keg.pints}
          key={index}/>
      )}
    </div>
  )
}

EditKeg.propTypes = {
  img: PropTypes.string,
  beername: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  pints: PropTypes.number
}




export default EditKeg