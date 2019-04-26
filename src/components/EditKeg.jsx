import React from 'react';
import PropTypes from 'prop-types';
import KegChange from './KegChange';


function EditKeg(props) {
  console.log(props.changeKeg);
  console.log(props.kegList);

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
          grid-template-columns: 1fr 1fr 80px 60px 1fr 150px;
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
        <div>Image</div>
        <div />
      </div>

      {Object.keys(props.kegList).map(function(kegId) {
        var keg = props.kegList[kegId];
        return <KegChange
          changeKeg = {props.changeKeg}
          kegList = {props.kegList}
          img = {keg.img}
          beername = {keg.beername}
          brand = {keg.brand}
          price = {keg.price}
          abv = {keg.abv}
          key = {keg.id} />;
      })}



    </div>
  );
}

EditKeg.propTypes = {
  kegList: PropTypes.object,
  changeKeg: PropTypes.object
};


export default EditKeg;
