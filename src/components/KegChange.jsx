import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import barrel from '../assets/rum-barrel.jpeg';


class KegChange extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      beername: this.props.beername,
      brand: this.props.brand,
      price: this.props.price,
      abv: this.props.abv,
      img: this.props.img,
      pintCount: this.props.pintCount,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeKegSubmit = this.handleChangeKegSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChangeKegSubmit(props) {
    props.kegList({
      beername: this.props.beername.value,
      brand: this.props.brand.value,
      price: this.props.price.value,
      abv: this.props.abv.value,
      img: this.props.img.value,
      pintCount: 124});
  }

  render() {
    console.log(props.changeKeg);
    console.log(props.kegList);
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


        <input type = 'text' id = 'beername' name = 'beerName' value = {this.props.beername} onChange = {this.handleChange} />

        <input type = 'text' id = 'brand' name = 'beerBrand' value = {this.props.brand} />

        <input type = 'number' id = 'price' name = 'beerPrice' value = {this.props.price} />

        <input type = 'number' id = 'abv' name = 'beerAbv' value = {this.props.abv}  />

        <input type = 'text' id = 'img' name = 'image' value = {this.props.img}  disabled/>
        <button onClick = {this.props.handleChangeKegSubmit}> Save Changes</button>
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
  pintCount: PropTypes.number,
  kegId: PropTypes.string,
  changeKeg: PropTypes.object,
  kegList: PropTypes.object,
  handleChangeKegSubmit: PropTypes.func
};


export default KegChange;
