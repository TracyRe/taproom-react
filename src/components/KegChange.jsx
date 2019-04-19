import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



function KegChange(props) {

  return (
    <div>
      <style jsx>{`
        
        div {
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.95);
          margin: 1rem 2rem;
          padding: 1rem;
        }
        
        form {
          width: 100%;
          display: grid;
          grid-auto-columns: 100px 240px;
          grid-auto-flow: column;
          grid-auto-rows: 22px;
          grid-row-gap: .25rem;
          margin-top: 1rem;
        }
        
        label {
          text-align: right;
          margin-right: .25rem;
        }
        
        label + input {
          margin-right: .5rem;
        }

        button {
          align-self: center;
          width: 150px;
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
      <form>
        <div>
          <label for=''>Name</label>
          <input type='text' name='beerName' value={props.beername}/>
        </div>
        <div>
          <label for=''>Brand</label>
          <input type='text' name='beerBrand' value={props.brand}/>
        </div>
        <div>
          <label for=''>Price / Pint</label>
          <input type='number' name='beerPrice' value={props.price}/>
        </div>
        <div>
          <label for=''>ABV</label>
          <input type='number' name='beerAbv' value={props.abv}/>
        </div>
        <div>
          <label for=''>Pints / Keg</label>
          <input type='number' name='beerAbv' value='124' disabled/>
        </div>
        <div>
          <label for=''>Image</label>
          <input type='text' name='image' value={props.img} disabled/>
        </div>
        <button> Save Changes</button>

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
