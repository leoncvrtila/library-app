import React from 'react';
import '../assets/css/layout.css';

import Navigation from './Navigation/Navigation';

const Layout = (props) => {
  return (
    <div className='Layout'>
      
      <Navigation />
      <main >{props.children}</main>

    </div>
  );
}

export default Layout;