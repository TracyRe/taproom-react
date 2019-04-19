import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Keg from './Keg'
import Auth from './Auth'
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

function Kegs() {


  return (
    <div>
      {kegList.map((keg, index) =>
        <Keg img={keg.img}
          beername={keg.beername}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          pints={keg.pints}
          key={index}/>
      )}
      <Auth/>
    </div>
  )
}

export default Kegs
