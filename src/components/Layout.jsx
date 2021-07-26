/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Layout = (props) => {

  return (
    <div className='App'>
      {props.children}
    </div>
  );
};
export default Layout;
