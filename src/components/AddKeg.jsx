import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import barrel from '../assets/rum-barrel.jpeg';

function AddKeg(props) {
  let _beername = null;
  let _brand = null;
  let _price = null;
  let _abv = null;
  let _img = barrel;
  let _pintCount = 124;

  function addNewKegSubmit(event) {
    event.preventDefault();
    props.addNewKeg({
      beername:_beername.value,
      brand:_brand.value,
      price:_price.value,
      abv:_abv.value,
      img:barrel,
      pintCount: 124});
    _beername.value = '';
    _brand.value = '';
    _price.value = '';
    _abv.value = '';
  }

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
      <form onSubmit = {addNewKegSubmit}>
        <label htmlFor = 'beername'>Name</label>
        <input type = 'text' id = 'beername' name = 'beerName' placeholder = 'Beer' ref = {(input) => {_beername = input;}}/>

        <label htmlFor = 'brand'>Brand</label>
        <input type = 'text' id = 'brand' name = 'beerBrand' placeholder = 'Brand' ref = {(input) => {_brand = input;}}/>

        <label htmlFor = 'price'>Price per Pint</label>
        <input type = 'number' id = 'price' name = 'beerPrice' step = "0.01" placeholder = '0.00' ref = {(input) => {_price = input;}}/>

        <label htmlFor = 'abv'>ABV</label>
        <input type = 'number' id = 'abv' name = 'beerABV' step = "0.1" placeholder = '0.0' ref = {(input) => {_abv = input;}}/>

        <label htmlFor = 'img'>Image</label>
        <input type = 'text' id = 'img' name = 'image' value = '../assets/rum-barrel.jpeg' ref = {(input) => {_img = input;}} disabled/>

        <div className = 'buttonrow'>
          <button type = 'submit'> Add Keg</button>
        </div>

      </form>

    </div>
  );
}

AddKeg.propTypes = {
  addNewKeg: PropTypes.func
};

export default AddKeg;
