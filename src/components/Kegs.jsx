import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Keg from './Keg'
import Auth from './Auth'
import fancybarrel from '../assets/fancy-barrel.jpg'
import whiskeybarrel from '../assets/whiskey-barrel.jpg'
import oakbarrel from '../assets/oak-barrel.jpg'


const kegList = [
  {
    img: fancybarrel,
    beername:'Fancy Beer',
    brand:'The Fanciest',
    price: 5,
    abv: 4.8,
    pints: 124
  },
  {
    img: whiskeybarrel,
    beername:'Pliny the Elder',
    brand:'Russian River',
    price: 9,
    abv: 5.5,
    pints: 124
  },
  {
    img: oakbarrel,
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
      <style jsx>{`

        .menu {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          justify-content: space-between;
          align-items: flex-start;
          align-content: center;
          grid-column-gap: 2rem;
          grid-row-gap: 2rem;
          margin: 1rem auto;
          padding: 2rem;
          width: 80vw;
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 0 30px #fff, 0 0 20px #fff, 0 0 10px #fff;
          border-radius: 10px;
          text-align: center;
        }
      `}
      </style>
      <div className = 'menu'>

        {kegList.map((keg, index) =>
          <Keg img = {keg.img}
            beername = {keg.beername}
            brand = {keg.brand}
            price = {keg.price}
            abv = {keg.abv}
            pints = {keg.pints}
            key = {index}/>
        )}
      </div>
      <div>
        <Auth />
      </div>
    </div>
  )
}

export default Kegs
