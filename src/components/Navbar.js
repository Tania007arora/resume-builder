import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', fontFamily: 'Poppins, sans-serif' }}>
      <h5 ><Link style={{ textDecoration: 'None', color: 'black', fontWeight: '700', paddingLeft: '4px' }} to="/">Resume Builder</Link></h5>
      <h6><Link style={{ textDecoration: 'None', color: 'black', fontWeight: '500' }} to="/template">Choose Template</Link></h6>
    </div>
  )
}

export default Navbar;
