import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';
import Auth from './Auth';



function Kegs(props) {
  console.log(props);

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

        {Object.keys(props.kegList).map(function(kegId) {
          var keg = props.kegList[kegId];
          return <Keg
            img = {keg.img}
            beername = {keg.beername}
            brand = {keg.brand}
            price = {keg.price}
            abv = {keg.abv}
            ibu = {keg.ibu}
            key = {kegId}
            kegId = {kegId}
            pintCount = {keg.pintCount}
            onSellPint = {props.onSellPint}
            onSellGrowler = {props.onSellGrowler}
            onReplaceKeg = {props.onReplaceKeg}
          />;
        })}
      </div>
      <div>
        <Auth />
      </div>
    </div>
  );
}

Kegs.propTypes = {
  kegList: PropTypes.object,
  onSellPint: PropTypes.func,
  onSellGrowler: PropTypes.func,
  onReplaceKeg: PropTypes.func,
};

export default Kegs;

//  newPintCount = {props.newPintCount}
//newPintCount: PropTypes.number,
