import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';

function Admin(props) {

  return (
    <div>
      <style jsx>{`
        div {
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.95);
          margin: 1rem 2rem;
          padding: 1rem;
        }

        h3 {
            line-height: 100%;
            font-size: 1.15rem;
            margin-bottom: .5rem;
          }

          button {
            margin: 0 auto 0 auto;
            width: 300px;
          }

          `}
      </style>
      <h2>Employees Only - Keg Management</h2>
      <AddKeg addNewKeg = {props.onAddNewKeg}/>
      <EditKeg
        changeKeg = {props.onEditKeg}
        removeKeg = {props.onRemoveKeg}
        kegList = {props.kegList}/>
      <Link to = '/'><button>Close Keg Management</button></Link>
    </div>
  );
}

Admin.propTypes = {
  onAddNewKeg: PropTypes.func,
  onEditKeg: PropTypes.func,
  onRemoveKeg: PropTypes.func,
  admin: PropTypes.string,
  kegList: PropTypes.object
};

export default Admin;
