import React from 'react';
import PropTypes from 'prop-types';
import KegChange from './KegChange';


function EditKeg(props) {
  console.log(props);
  return (
    <div className = 'outer'>
      <style jsx>{`

          .outer {
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.95);
            margin: 1rem 2rem;
            padding: 1rem;
          }

          .datagrid {
            display: grid;
            grid-template-columns: 1fr 1fr 80px 60px 60px 1fr 90px 90px;
            grid-auto-flow: column;
            font-size: .75rem;
            font-weight: bold;
            text-transform: uppercase;
          }

          input {
            height: 22px;
            width: 100%;
          }


          h3 {
            line-height: 100%;
            font-size: 1.15rem;
            margin-bottom: .5rem;
          }
          `}
      </style>
      <h3>Edit Keg</h3>
      <div className = 'datagrid'>
        <div>Name</div>
        <div>Brand</div>
        <div>Price / Pint</div>
        <div>ABV</div>
        <div>IBU</div>
        <div>Image</div>
      </div>


      {Object.keys(props.kegList).map(function(kegId) {
        var keg = props.kegList[kegId];
        return <KegChange
          changeKeg = {props.changeKeg}
          removeKeg = {props.removeKeg}
          img = {keg.img}
          beername = {keg.beername}
          brand = {keg.brand}
          price = {keg.price}
          abv = {keg.abv}
          ibu = {keg.ibu}
          key = {kegId}
          kegId = {kegId} />;
      })}



    </div>
  );
}

EditKeg.propTypes = {
  kegList: PropTypes.object,
  changeKeg: PropTypes.func,
  removeKeg: PropTypes.func
};


export default EditKeg;
