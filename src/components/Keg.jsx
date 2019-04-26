import React from 'react';
import PropTypes from 'prop-types';


function Keg(props) {
console.log(props);

function sellPint() {
  let newPintCount = props.pintCount;
  // newPintCount--;
  props.onSellPint(newPintCount);
}

  return (
    <div>
      <style jsx>{`

        img {
            height: 100%;
            margin-bottom: .5rem;
            border-radius: 6px;
            width: 100%;
            background: rgba(255, 255, 255, 0.85);
            box-shadow: 0 0 30px #fff, 0 0 20px #fff, 0 0 10px #fff;
            border-radius: 10px;
            box-shadow: 0 0 30px #fff, 0 0 20px #fff, 0 0 10px #fff;
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
      <button onClick = {sellPint}>Pull a Pint</button>
      <button>Sell a Growler</button>

      <p>Pints remaining: {props.pintCount}</p>

    </div>
  );
}

Keg.propTypes = {
  img: PropTypes.string,
  beername: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  kegId: PropTypes.string,
  pintCount: PropTypes.number,
  onSellPint: PropTypes.func,
  newPintCount: PropTypes.number,
};

export default Keg;
