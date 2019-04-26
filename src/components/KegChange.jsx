import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import barrel from '../assets/rum-barrel.jpeg';


class KegChange extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    this.beername: props.beername,
    this.brand: props.brand,
    this.price: props.price,
    this.abv: props.abv,
    this.img: props.img,
    this.pintCount: props.pintCount,
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeKegSubmit = this.handleChangeKegSubmit.bind(this);

  }

    handleChange(event) {
      this.setState({value: event.input});
    }

    handleChangeKegSubmit(props) {
      props.changeKeg({
        beername:_beername.value,
        brand:_brand.value,
        price:_price.value,
        abv:_abv.value,
        img:_img.value,
        pintCount: 124})
      }

    render() {
      return (
        <form>
          <style jsx>{`

              button {
                align-self: center;
                width: 140px;
                font-size: .75rem;
                padding: .25rem 0;
              }


              form {
                display: grid;
                grid-template-columns: 1fr 1fr 80px 60px 1fr 150px;
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


            <input type = 'text' id = 'beername' name = 'beerName' value = {props.beername} ref = {(input) => {_beername = input}}/>

            <input type = 'text' id = 'brand' name = 'beerBrand' value = {props.brand} ref = {(input) => {_brand = input}}/>

            <input type = 'number' id = 'price' name = 'beerPrice' value = {props.price} ref = {(input) => {_price = input}}/>

            <input type = 'number' id = 'abv' name = 'beerAbv' value = {props.abv}  ref = {(input) => {_abv = input}}/>

            <input type = 'text' id = 'img' name = 'image' value = {props.img} ref = {(input) => {_img = input}}  disabled/>
            <button onClick={props.handleChangeKegSubmit}> Save Changes</button>
          </form>
        );
    }

}

KegChange.propTypes = {
  img: PropTypes.string,
  beername: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  pints: PropTypes.number,
  changeKeg: PropTypes.func
};


export default KegChange;
