import React from 'react';
import PropTypes from 'prop-types';


function KegChange(props) {
  let _beername = props.beername;
  let _brand = props.brand;
  let _price = props.price;
  let _abv = props.abv;
  let _ibu = props.ibu;
  let _img = props.img;
  let {kegId} = props;

  function changeKegSubmit(event) {
    event.preventDefault();
    props.changeKeg(kegId, {
      beername:_beername.value,
      brand:_brand.value,
      price:_price.value,
      abv:_abv.value,
      ibu:_ibu.value,
      img:_img.value,
      pintCount: 124});
  }



  function removeKegSubmit(event) {
    event.preventDefault();
    props.removeKeg(kegId);
  }


  return (
    <form>
      <style jsx>{`

        button {
          align-self: center;
          width: 80px;
          font-size: .75rem;
          padding: .25rem 0;
        }


        form {
          display: grid;
          grid-template-columns: 1fr 1fr 80px 60px 60px 1fr 90px 90px;
          grid-auto-flow: row;
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

        input {
          padding: 0 .25rem;
        }
      `}
      </style>


      <input type = 'text' id = 'beername' name = 'beerName' defaultValue = {props.beername} ref = {(input) => {_beername = input;}}/>

      <input type = 'text' id = 'brand' name = 'beerBrand' defaultValue = {props.brand} ref = {(input) => {_brand = input;}}/>

      <input type = 'number' id = 'price' name = 'beerPrice' defaultValue = {props.price} step = "0.01" ref = {(input) => {_price = input;}}/>

      <input type = 'number' id = 'abv' name = 'beerAbv' defaultValue = {props.abv} step = "0.1" ref = {(input) => {_abv = input;}}/>

      <input type = 'number' id = 'ibu' name = 'beerIbu' defaultValue = {props.ibu} step = "0.1" ref = {(input) => {_ibu = input;}}/>

      <input type = 'text' id = 'img' name = 'image' defaultValue = {props.img} ref = {(input) => {_img = input;}}  disabled/>
      <button onClick = {changeKegSubmit}> Save</button>
      <button onClick = {removeKegSubmit}> Remove</button>
    </form>
  );
}

KegChange.propTypes = {
  changeKeg: PropTypes.func,
  removeKeg: PropTypes.func,
  img: PropTypes.string,
  beername: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  ibu: PropTypes.number,
  pints: PropTypes.number,
  pintCount: PropTypes.number
};

export default KegChange;
