import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import barrel from '../assets/rum-barrel.jpeg'

function AddKeg(props) {

  return (
    <div>
      <style jsx>{`

        div {
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.95);
          margin: 1rem 2rem;
          padding: 1rem 1rem 0 1rem;
        }

        form {
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-auto-rows: auto;
          grid-row-gap: .25rem;
          margin-top: 1rem;
        }

        label {
          text-align: right;
          margin-right: 1rem;
        }

        button {
          align-self: center;
          width: 150px;
        }

        .buttonrow {
          grid-column: 1 / span 2;
          display: flex;
          justify-content: center;
          padding: 0;
        }

        img {
            height: 100%;
            width: auto;
            align-self: flex-start;
          }

          h3 {
            line-height: 100%;
            font-size: 1.15rem;
            margin-bottom: .5rem;
          }
        `}
      </style>
      <h3>Add Keg</h3>
      <form>
        <label htmlFor = ''>Name</label>
        <input type = 'text' name = 'beerName' value = ''/>

        <label htmlFor = ''>Brand</label>
        <input type = 'text' name = 'beerBrand' value = ''/>

        <label htmlFor = ''>Price per Pint</label>
        <input type = 'number' name = 'beerPrice' value = ''/>

        <label htmlFor = ''>ABV</label>
        <input type = 'number' name = 'beerAbv' value = ''/>

        <label htmlFor = ''>Pints per Keg</label>
        <input type = 'number' name = 'beerAbv' value = '124' disabled/>

        <label htmlFor = ''>Image</label>
        <input type = 'text' name = 'image' value = '../assets/rum-barrel.jpeg' disabled/>

        <h5 style = {{textAlign: 'left'}}>Beer Name</h5><p>{props.beername}</p>
        <h5>Brand </h5>
        <p>{props.brand}</p>
        <h5>Price per Pint </h5>
        <p>$ {props.price}</p>
        <h5>ABV </h5>
        <p>{props.abv} %</p>
        <h5><strong>Image</strong></h5> <img src = {barrel}/>
        <div className = 'buttonrow'>
          <button> Add Keg</button>
        </div>

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
