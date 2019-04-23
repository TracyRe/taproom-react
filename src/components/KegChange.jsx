import React, { Component } from 'react'
import PropTypes from 'prop-types'



function KegChange(props) {

  return (
    <form>
      <style jsx>{`

        button {
          align-self: center;
          width: 150px;
        }

        form {
          height: 25px;
        }

        td {
          border: 1px solid #ccc;
          padding: 0 .5rem;
          margin: 0;
          height: 24px;
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

      <tr>
        <td>
          <input type = 'text' name = 'beerName' value = {props.beername}/>Hello
        </td>
        <td>
          <input type = 'text' name = 'beerBrand' value = {props.brand}/>efea
        </td>
        <td>
          <input type = 'number' name = 'beerPrice' value = {props.price}/>fdafda
        </td>
        <td>
          <input type = 'number' name = 'beerAbv' value = {props.abv}/>fdafda
        </td>
        <td>
          <input type = 'number' name = 'beerPints' value = {props.pints}/>fdafda
        </td>
        <td>
          <input type = 'text' name = 'image' value = {props.img} disabled/>fdafda
        </td>
        <td>
          <button> Save Changes</button>
        </td>
      </tr>
    </form>
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
