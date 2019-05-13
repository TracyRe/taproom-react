import React from 'react';
import PropTypes from 'prop-types';


function Keg(props) {

  function sellPint(kegId) {
    let newPintCount = props.pintCount;
    // newPintCount--;
    props.onSellPint(newPintCount, props.kegId);
  }

  function sellGrowler(kegId) {
    let newPintCount = props.pintCount;
    props.onSellGrowler(newPintCount, props.kegId);
  }

  function replaceKeg(kegId) {
    let newPintCount = props.pintCount;
    props.onReplaceKeg(newPintCount, props.kegId);
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

          .showButton {
            display: block;
            margin: .5rem auto;
          }

          .hideButton {
            display: none;
          }
        `}
      </style>


      <img src = {props.img} alt = {props.beername} title = {props.beername}/>
      <h3>{props.beername} -  ${props.price}</h3>
      <p className = 'brand'>{props.brand}</p>
      <p>ABV: {props.abv}%</p>
      <p>IBU: {props.ibu}</p>
      <button onClick = {sellPint}>Pull a Pint</button>
      <button onClick = {sellGrowler}>Sell a Growler</button>
      <button className = {(props.pintCount > 11) ? 'hideButton' : 'showButton'} onClick = {replaceKeg}>Replace Keg</button>

      <p>Pints remaining: {props.pintCount}</p>

    </div>
  );
}

Keg.propTypes = {
  img: PropTypes.string,
  beername: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  ibu: PropTypes.string,
  kegId: PropTypes.string,
  pintCount: PropTypes.string,
  onSellPint: PropTypes.func,
  onSellGrowler: PropTypes.func,
  onReplaceKeg: PropTypes.func,
  newPintCount: PropTypes.number,
};

export default Keg;
