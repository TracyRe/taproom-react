import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Keg from './Keg'
import Auth from './Auth'



function Kegs(props) {


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
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 0 30px #fff, 0 0 20px #fff, 0 0 10px #fff;
          border-radius: 10px;
          margin: 1rem auto;
          padding: 2rem;
          width: 80vw;
          text-align: center;
        }
      `}
      </style>
      <div className = 'menu'>

        {props.kegList.map((keg, index) =>
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

Kegs.propTypes = {
  kegList: PropTypes.array
}

export default Kegs
