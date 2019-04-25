import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  return (
    <div>
      <style jsx>{`
      div {
        background-color: #f42;
      }
      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p>{props.issue}</p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,  location:PropTypes.string.isRequired,
  issue: PropTypes.string,
};
export default Ticket;
