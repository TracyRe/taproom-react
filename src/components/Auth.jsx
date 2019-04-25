import React from 'react';
import { Link } from 'react-router-dom';


function Auth() {

  const Auth =  {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  };


  return (
    <div style = {Auth}>
      <Link to = 'admin'><button>Employees Only</button></Link>
    </div>
  );
}


export default Auth;
