import React from 'react';
import PropTypes from 'prop-types';



function KegChange(props) {

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


      <input type = 'text' name = 'beerName' value = {props.beername}/>
      <input type = 'text' name = 'beerBrand' value = {props.brand}/>
      <input type = 'number' name = 'beerPrice' value = {props.price}/>
      <input type = 'number' name = 'beerAbv' value = {props.abv}/>
      <input type = 'text' name = 'image' value = {props.img} disabled/>
      <button> Save Changes</button>
    </form>
  );
}

KegChange.propTypes = {
  img: PropTypes.string,
  beername: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  pints: PropTypes.number
};

export default KegChange;
