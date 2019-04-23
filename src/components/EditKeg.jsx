import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import KegChange from './KegChange'
import fancybarrel from '../assets/fancy-barrel.jpg'
import whiskeybarrel from '../assets/whiskey-barrel.jpg'
import oakbarrel from '../assets/oak-barrel.jpg'

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

  return (
    <div>
      <style jsx>{`

        table, thead, th, tr, td {
          border-collapse: collapse;
        }

        table {
          cellspacing: 0;
          cellpadding: 0;
          margin-bottom: 1rem;
          background: #fff;
        }

        td {
          border: 1px solid #ccc;
          padding: 0 .5rem;
          margin: 0;
          height: 24px;
        }

        input {
          height: 22px;
        }

        h3 {
          line-height: 100%;
          font-size: 1.15rem;
          margin-bottom: .5rem;
        }
      `}
      </style>
      <h3>Edit Keg</h3>
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Brand
            </th>
            <th>
              Price / Pint
            </th>
            <th>
              ABV
            </th>
            <th>
              Pints / Keg
            </th>
            <th>
              Image
            </th>
          </tr>
        </thead>
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
      </table>
    </div>
  )
}




export default EditKeg
