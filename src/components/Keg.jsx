import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



function Keg(props) {

  const Keg =  {
    background: '#fff',
  }


  return (
    <div style = {Keg}>
      <style jsx>{`
        
        div {
          border-radius: 6px;
          box-shadow: 0 0 30px #fff, 0 0 20px #fff, 0 0 10px #fff;
          padding: 1rem 0;
        }
        
        img {
            height: 100%;
            width: 100%;
            align-self: flex-start;
          }

          h3 {
            line-height: 100%;
            font-size: 1.15rem;
            margin-bottom: .5rem;
          }

          .brand {
            font-style: italic;
          }
        `}  
      </style>
    
    
      <img src = {props.img} alt = {props.beername} title = {props.beername}/>
      <h3>{props.beername} -  ${props.price}</h3>
      <p className = 'brand'>{props.brand}</p>
      <p>ABV: {props.abv}%</p>
      <button>Pull a Pint</button>
      <button>Sell a Growler</button>

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
