import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
        <Link to='/'> Home </Link>
        <Link to='/followupcallform'> Follow Up Call Form </Link>
        <Link to='/contact'> Contact </Link>
    </div>
  )
}

export default NavigationBar