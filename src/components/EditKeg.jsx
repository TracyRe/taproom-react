import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import KegChange from './KegChange'
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


function EditKeg(props) {

  return (
    <div className='outer'>
      <style jsx>{`

        .outer {
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.95);
          margin: 1rem 2rem;
          padding: 1rem;
        }

        .datagrid {
          display: grid;
          grid-template-columns: 1fr 1fr 80px 60px 80px 1fr 150px;
          grid-auto-flow: column;
          font-size: .75rem;
          font-weight: bold;
          text-transform: uppercase;
        }

        input {
          height: 22px;
          width: 100%;
        }


        h3 {
          line-height: 100%;
          font-size: 1.15rem;
          margin-bottom: .5rem;
        }
      `}
      </style>
      <h3>Edit Keg</h3>
      <div className='datagrid'>
        <div>Name</div>
        <div>Brand</div>
        <div>Price / Pint</div>
        <div>ABV</div>
        <div>Pints / Keg</div>
        <div>Image</div>
        <div></div>
      </div>

        {kegList.map((keg, index) =>
          <KegChange
            beername = {keg.beername}
            brand = {keg.brand}
            price = {keg.price}
            abv = {keg.abv}
            pints = {keg.pints}
            img = {keg.img}
            key = {index}/>
        )}

    </div>
  )
}




export default EditKeg
